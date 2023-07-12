import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { HeroesComponentComponent } from './heroes-component/heroes.component';
import { ContactsComponent } from './contacts/contacts.component';

const routes: Routes = [
  // { 
  //   path: 'contacts', 
  //   component: ContactsComponent 
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
