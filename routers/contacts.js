const mongoose = require("mongoose");
const Contacts = require("../models/Contacts");

// Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
    console.log("ERROR: " + reason);
    res.status(code || 500).json({
        "error": message
    });
}

module.exports = {
    getAllContacts: function (req, res) {
        Contacts.find({})
            .exec(function (err, contacts) {
                if (err) {
                    handleError(res, err.message, "Failed to get contacts.");
                } else {
                    res.status(200).json(contacts);
                }
            });
    },
    addContacts: function (req, res) {
        let newContactDetails = req.body;
        newContactDetails._id = new mongoose.Types.ObjectId();
        if (!newContactDetails.name) {
            handleError(res, "Invalid user input", "Must provide a name.", 400);
        } else {
            let contact = new Contacts(newContactDetails);
            contact.save(function (err) {
                if (err) {
                    handleError(res, err.message, "Failed to create new contact.");
                } else {
                    res.status(201).json(contact);
                }
            });
        }
    },
    getContactID: function (req, res) {
        console.log(req.params);
        Contacts.findOne({
            _id: req.params.id
        }, function (err, contact) {
            if (err) {
                handleError(res, err.message, "Failed to get contact");
            } else {
                res.status(200).json(contact);
            }
        });
    },
    updateContactID: function (req, res) {
        let updateDoc = req.body;
        delete updateDoc._id;
        Contacts.updateOne({
                _id: req.params.id
            }, updateDoc,
            function (err, contact) {
                if (err) {
                    handleError(res, err.message, "Failed to update contact");
                } else {
                    updateDoc._id = req.params.id;
                    res.status(200).json(updateDoc);
                }
            });
    },
    deleteContactID: function (req, res) {
        Contacts.deleteOne({
            _id: req.params.id
        }, function (err, result) {
            if (err) {
                handleError(res, err.message, "Failed to delete contact");
            } else {
                res.status(200).json(req.params.id);
            }
        });
    }
};