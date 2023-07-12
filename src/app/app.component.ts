import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IEmp } from './Interface/IEmp';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private router: Router) {
    
  }
  title = 'CONTACTS';
  
  filter: "all" |  "active" | "done" = "all";

  toggler: boolean = false;
  selectedItem: any;
  selectedIndex: number = 0;

  allItems = [
    { description: "eat", done: true },
    { description: "sleep", done: false },
    { description: "play", done: false },
    { description: "laugh", done: false },
  ];

  allDetails: IEmp[] =  [
    { Id: 0, name: 'Chandermani Arora', email: 'chandarmeni@technovert.com', mobile: '+91 9988223344', landline: '040 30 1231211', website: 'https://www.technovert.com', address: `123 now here <br> Some street <br> Madhapur, Hyderabad 500033` },
    { Id: 1, name: 'Sashi Joshi', email: 'sashi@technovert.com', mobile: '+91 8899223344', landline: '040 30 1231222', website: 'https://www.technovert.com', address: '234 now here<br> Some street<br> Madhapur, Hyderabad 500033' },
    { Id: 2, name: 'Praveen Battula', email: 'praveen@technovert.com', mobile: '+91 7788221122', landline: '040 30 1231233', website: 'https://www.technovert.com', address: '345 now here<br> Some street<br> Madhapur, Hyderabad 500033' },
    { Id: 3, name: 'Yijay Yalamanchili', email: 'yijay@technovert.com', mobile: '+91 9988772244', landline: '040 30 1231244', website: 'https://www.technovert.com', address: '567 now here<br> Some street<br> Madhapur, Hyderabad 500033' }
  ];

  ngOnInit(): void {
    this.setItemOnLoad();
  }

  setItemOnLoad() {
    localStorage.setItem('allDetails', JSON.stringify(this.allDetails));    
  }

  selectItem = (index: number) => {
    this.selectedItem = this.allDetails[index];
    this.selectedIndex = index;
  }

  get items() {
    if (this.filter === "all") {
      return this.allItems;
    }
    return this.allItems.filter((item) =>
      this.filter === "done" ? item.done : !item.done
    );
  }

  addItem = (description: string) => {
    this.allItems.unshift({
      description,
      done: false
    })
       
  }

  formatAddress = (address: string) => {
    return address.replace(/<br>/g, '\n');
  }

  onDisplayToggle = (actionType?: string) => {
    actionType == 'close' ? this.toggler = false : this.toggler = true    
  }

  handleDelete(){
    if (this.selectedIndex > -1) {
      this.allDetails.splice(this.selectedIndex, 1);
      this.selectItem(0);
    }
  }

  addEmployee(emp: any) {
    this.allDetails.push(...emp);
  }

  handleEmployeeEdit(newEmpData?: any) {    
    let updateItem = this.allDetails.findIndex(item => item.Id === newEmpData[0].Id);
    this.allDetails[updateItem] = newEmpData[0];
    this.allDetails= Object.assign([], this.allDetails)
    this.selectedItem = this.allDetails[this.selectedIndex];
    let strSelectedItem = JSON.stringify(this.selectItem);
    let strAllDetails = JSON.stringify(this.allDetails);
    // localStorage.setItem('selectedIem', strSelectedItem);
    // localStorage.setItem('allDetails', strAllDetails);
  }
}
