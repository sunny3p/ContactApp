import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { ContactDetailsComponent } from "./contacts/contact-details/contact-details.component";
import { ContactListComponent } from "./contacts/contact-list/contact-list.component";
import { ContactService } from "../app/contacts/contact.service";
@NgModule({
  declarations: [AppComponent, ContactDetailsComponent, ContactListComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule {}
