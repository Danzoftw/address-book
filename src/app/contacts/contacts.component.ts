import { Component, Inject, NgModule, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../app.component';
import { AppModule } from '../app.module';
import { InputTextModule } from 'primeng/inputtext';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AddEmployeeModule } from '../add-employee/add-employee.module';
import { ActivatedRoute } from '@angular/router';
import { IEmp } from '../Interface/IEmp';

@Component({
  selector: 'app-contacts',
  // standalone: true,
  // imports: [CommonModule, AddEmployeeModule],
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})

export class ContactsComponent  {
  public _contactsDetails!: any;
  selectItem: (index: number) => void;
  formatAddress: (address: string) => string;
  handleDelete: () => any;
  selectedIndex: number = 0;
  editToggler: boolean = false;

  @Input()
  get toggler(): boolean | undefined {
    return this.appComponent.toggler;
  }

  set toggler(value: any) {
    this.appComponent.toggler = true;
  }

  get allDetails(): any {
    return this.appComponent.allDetails;
  }

  @Input()
  get selectedItem(): any {
    return this.appComponent.selectedItem;
  }

  set selectedItem(val: any) {
  }
  
  handleEdit() {
    this.editToggler = !this.editToggler; 
  }

  constructor(private appComponent: AppComponent) {
    this._contactsDetails = this.appComponent.allDetails;

    this.selectItem = (index: number) => {
      this.appComponent.selectItem(index);
      this.selectedIndex = index;
      this.selectedItem = this.appComponent.selectedItem;
    };

    this.formatAddress = this.appComponent.formatAddress;

    //for selecting first element
    if (this.allDetails.length > 0) {
      this.appComponent.selectItem(0);
      this.selectedItem = this.appComponent.selectedItem;
    }

    this.handleDelete = this.appComponent.handleDelete;
  }
}