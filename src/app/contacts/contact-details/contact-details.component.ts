import { ContactService } from "./../contact.service";
import { Component, OnInit, Input } from "@angular/core";
import { Contact } from "../contact";

@Component({
  selector: "app-contact-details",
  templateUrl: "./contact-details.component.html",
  styleUrls: ["./contact-details.component.css"]
})
export class ContactDetailsComponent implements OnInit {
  @Input()
  contact: Contact;

  @Input()
  createHandler: Function;
  @Input()
  updateHandler: Function;
  @Input()
  deleteHandler: Function;

  constructor(private contactService: ContactService) {}

  ngOnInit() {}
  createContact(contact: Contact) {
    this.contactService
      .createContact(contact)
      .subscribe((newContact: Contact) => {
        this.createHandler(newContact);
      });
  }

  updateContact(contact: Contact): void {
    this.contactService
      .updateContact(this.contact._id, contact)
      .subscribe((updatedContact: Contact) => {
        this.updateHandler(updatedContact);
      });
  }

  deleteContact(contactId: string): void {
    this.contactService
      .deleteContact(contactId)
      .subscribe((deletedContactId: string) => {
        this.deleteHandler(deletedContactId);
      });
  }
}
