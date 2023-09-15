import { Component } from '@angular/core';
import { database } from '../../datafake/datafake'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  gamelist = database;
}
