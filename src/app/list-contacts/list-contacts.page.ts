import { Component, OnInit } from '@angular/core';
// import { NavController, NavParams } from '@ionic/angular';
import { ContactService } from '../../service/contact.service';
import { Observable } from 'rxjs';
import { Contact } from '../../class/contact';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-contacts',
  templateUrl: './list-contacts.page.html',
  styleUrls: ['./list-contacts.page.scss'],
})


export class ListContactsPage implements OnInit {

  public contacts: Observable<Contact[]>

  constructor(private contact_service: ContactService,
              private router: Router) { }

  ngOnInit() {
  }

  private pull_data(){
    this.contacts = this.contact_service
    .get_contacts()
    .snapshotChanges()
    .map(
      (changes) => changes.map(
        (c) => {
          let values = c.payload.val()
          let contact = new Contact(values['name'], values['company'], values['cellnum'], values['email'])
          contact.key = c.payload.key
          return contact
        }
      )
    )
  }

  public goto_contact(c: Contact){
    this.router.navigateByUrl('/contact', {'state': {'contact': c}})
  }

  public newcontact(){
    this.router.navigateByUrl('/contact')
  }

  ionViewWillEnter(){
    this.pull_data()
  }

}
