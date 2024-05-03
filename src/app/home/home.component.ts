import { Component } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { FooterComponent } from '../footer/footer.component';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MenuComponent, FooterComponent, NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  decks = [
    {name: "software archtecture", pendingActivities:"pending 1"},
    {name: "FrontEnd", pendingActivities:"pending 10"},
    {name: "backEnd", pendingActivities:"pending 20"},
    {name: "IA", pendingActivities:"pending 15"},
  ]


}
