import { Component, Inject, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../app.component';
import { InputTextModule } from 'primeng/inputtext';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-heroes-component',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})

export class HeroesComponentComponent {
 value!: string;
 allItems: { description: string, done: boolean }[];
 items: { description: string; done: boolean }[];

 constructor(private appComponent: AppComponent) {
  this.allItems = this.appComponent.allItems;
  this.items = this.appComponent.items;
  this.value = '';
 }

 addItem(description: string) {
  this.appComponent.addItem(description);
 }
}

@NgModule({
  imports: [
    InputTextModule,
    FormsModule
  ],
  declarations: [
    HeroesComponentComponent
  ]
})

export class HeroesComponentModule { }