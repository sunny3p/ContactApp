import { Injectable } from "@angular/core";
import { Contact } from "./contact";
import { HttpClient, HttpHeaders } from "@angular/common/http";
const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};
@Injectable({
  providedIn: "root"
})
export class ContactService {
  constructor(private http: HttpClient) {}
  result: any;
  getAllContacts() {
    return this.http.get("/api/contacts");
  }
  getContact(id: string) {
    let url: string = "/api/contacts/" + id;
    return this.http.get(url);
  }
  createContact(data) {
    return this.http.post("/api/contacts", data, httpOptions);
  }
  updateContact(id, data) {
    let url: string = "/api/contacts/" + id;
    return this.http.put(url, data, httpOptions);
  }
  deleteContact(id) {
    let url = "/api/contacts/" + id;
    return this.http.delete(url, httpOptions);
  }
}
