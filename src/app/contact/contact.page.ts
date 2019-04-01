import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from '../../class/contact';
import { ContactService } from '../../service/contact.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})



export class ContactPage implements OnInit {
  public contact: Contact
  public contact_items = [
    ['Nombre', 'name'],
    ['Organizacion', 'company'],
    ['Movil', 'cellnum'],
    ['Correo', 'email']
  ]
  public is_empty_contact: boolean

  constructor(private c_service: ContactService,
              private router: Router,
              private location: Location) {
    this.contact = new Contact("", "", "", "")
    let state = router.getCurrentNavigation().extras.state
    if (state != null && 'contact' in state) {
      this.contact = state['contact']
    }
    let c = this.contact
    this.is_empty_contact = (c.name + c.company + c.cellnum + c.email) == ""
  }

  ngOnInit() {
  }

  public add_contact() {
    console.log(this.contact)
    this.c_service.add_contact(this.contact)
    this.contact = new Contact("", "", "", "")
    this.router.navigateByUrl('/list-contacts')
  }

  public update_contact() {
    this.c_service.update_contact(this.contact)
    this.router.navigateByUrl('/list-contacts')
  }

  public delete_contact() {
    this.c_service.delete_contact(this.contact)
    this.router.navigateByUrl('/list-contacts')
  }

  public go_back() {
    this.location.back()
  }
}
