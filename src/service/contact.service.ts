import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Contact } from '../class/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private contactDB = this.db.list<Contact>('AgendaFirebase');

  constructor(private db: AngularFireDatabase) { }

  public add_contact(contact: Contact){
    return this.contactDB.push(contact)
  }

  public get_contacts(){
    return this.contactDB
  }

  public update_contact(contact: Contact){
    this.contactDB.update(contact.key, contact)
  }

  public delete_contact(contact: Contact){
    this.contactDB.remove(contact.key)
  }
}
