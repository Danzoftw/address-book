import { Component } from '@angular/core';
import { AppComponent } from '../../app.component'

@Component({
  selector: 'app-top-navigation',
  templateUrl: "./top-navigation.component.html",
  styleUrls: ['./top-navigation.component.scss']
})
export class TopNavigationComponent {
  onDisplayToggle: () => any;
  constructor(private appComponent: AppComponent) {
    this.onDisplayToggle = this.appComponent.onDisplayToggle;
  }

  ngOnInit() {
  }
}