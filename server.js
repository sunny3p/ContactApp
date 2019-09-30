/**
 * A complete MEAN Stack Contact Details Application.
 * Code Reference: https://devcenter.heroku.com/articles/mean-apps-restful-api
 *To run this app simply do following steps
 * npm install
 * npm start
 */
let express = require("express");
let bodyParser = require("body-parser");
let mongoose = require("mongoose");
const contacts = require("./routers/contacts")
const path = require('path');


let app = express();
app.use(bodyParser.json());

// Create link to Angular build directory
//let distDir = __dirname + "/dist/";
app.use(express.static(path.join(__dirname, './dist/contactlist-angular')));

// MongoDB connection url
let url = process.env.MONGODB_URI || "mongodb://localhost:27017/contactlist";

let option = {
  useUnifiedTopology: true,
  useNewUrlParser: true
};

// Connect to the database before starting the application server.
mongoose.connect(url, option, function (err) {
  if (err) {
    process.exit(1);
    return console.log('Mongoose - connection error:', err);
  }
  console.log('Connect Successfully');
  // Initialize the app.
  let server = app.listen(process.env.PORT || 8080, function () {
    let port = server.address().port;
    console.log("App now running on port", port);
  });

});



// CONTACTS API ENDPOINTS BELOW


/*  "/api/contacts"
 *    GET: finds all contacts
 *    POST: creates a new contact
 */

app.get("/api/contacts", contacts.getAllContacts);

app.post("/api/contacts", contacts.addContacts);

/*  "/api/contacts/:id"
 *    GET: find contact by id
 *    PUT: update contact by id
 *    DELETE: deletes contact by id
 */

app.get("/api/contacts/:id", contacts.getContactID);

app.put("/api/contacts/:id", contacts.updateContactID);

app.delete("/api/contacts/:id", contacts.deleteContactID);
