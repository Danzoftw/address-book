import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from  './contacts-routing.module';
import { ContactsComponent } from './contacts.component';
import { AddEmployeeModule } from '../add-employee/add-employee.module';

@NgModule({
  imports: [
    CommonModule,
    ContactsRoutingModule,
    AddEmployeeModule
  ],
  declarations: [ContactsComponent]
})
export class ContactsModule { }
