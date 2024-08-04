import { Component } from '@angular/core';
import { MatMenuModule} from "@angular/material/menu";
import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MatMenuModule,MatToolbarModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

}
