import { Component, Input, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { InputTextModule } from 'primeng/inputtext';
import { IEmp } from '../Interface/IEmp';
import { AppComponent } from '../app.component';
import { ContactsComponent } from '../contacts/contacts.component';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})

export class AddEmployeeComponent {
  selectedItem: { Id: number, name: string, email: string, mobile: string, landline: string, website: string, address: string };
  allDetails: IEmp[];
  tempSelectedItem: IEmp[] = [];
  Id: number = 0;
  // toggler: boolean = false;
  // tempSelectedItem = this.selectedItem
  onDisplayToggle: (actionType?: string) => any;
  addEmployee: (emp: any) => void;
  handleEmployeeEdit: () => any;
  handleEdit: () => any;
  value!: string;
  name!: string;
  email!: string;
  mobile!: string;
  landline!: string;
  website!: string;
  address: string = '';

  @Input()
  get toggler(): boolean | undefined {
    return this.appComponent.toggler;
  }

  set toggler(value: any) {
    this.appComponent.toggler = true;
  }

  @Input()
  get editToggler(): boolean | undefined {    
    return this.contactsComponent.editToggler;
  }

  set editToggler(value: any) {
    this.contactsComponent.editToggler = false;
  }

  empDetails: IEmp[] = [
    {
      name: "", 
      email: "", 
      mobile: '0', 
      landline: "", 
      website: '',
      address: '' 
    }
  ]

  handleSubmit() {
    let newId: number | undefined = undefined;
    if(this.allDetails.length > 0) {
      newId = this.allDetails[this.allDetails.length -1].Id;
      if (newId !== undefined) {
        newId =  newId + 1;
      }
    }
    
    this.empDetails = [{
      name: this.name,
      email: this.email,
      mobile: this.mobile,
      landline: this.landline,
      website: this.website,
      address: this.address,
      Id: newId
    }]
    this.appComponent.addEmployee(this.empDetails);
  }

  isHandleEditSubmit() {
    this.empDetails = [{
      Id: this.selectedItem?.Id,
      name: this.name ? this.name : this.selectedItem?.name,
      email: this.email ? this.email : this.selectedItem?.email,
      mobile: this.mobile ? this.mobile : this.selectedItem?.mobile,
      landline: this.landline ? this.landline : this.selectedItem.landline,
      website: this.website ? this.website : this.selectedItem.website,
      address: this.address ? this.address : this.selectedItem.address
    }]
    this.appComponent.handleEmployeeEdit(this.empDetails);
    this.editToggler = !this.editToggler;
  }
 
  constructor(private appComponent: AppComponent, private contactsComponent: ContactsComponent) {    
    this.value = '';
    this.addEmployee = this.appComponent.addEmployee;
    this.handleEmployeeEdit = this.appComponent.handleEmployeeEdit;
    this.handleEdit = this.contactsComponent.handleEdit;
    this.selectedItem = this.appComponent.selectedItem;
    this.onDisplayToggle = this.appComponent.onDisplayToggle;
    this.allDetails = this.appComponent.allDetails;
  }
}