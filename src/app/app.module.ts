import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactsComponent } from './contacts/contacts.component';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
// import { TopNavigationComponent } from './layout/top-navigation/top-navigation.component';
import {layoutModule} from './layout/layout.module';
import { ContactsModule } from './contacts/contacts.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/contacts',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    // MainLayoutComponent,
    // ContactsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    layoutModule,
    ContactsModule,
    BrowserAnimationsModule,
    FormsModule,
    // CommonModule,    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }