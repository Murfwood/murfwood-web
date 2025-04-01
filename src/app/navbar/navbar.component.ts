import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  activeLink: string = 'home'; // Default active link

  setActive(link: string): void {
    this.activeLink = link;
    
  }
}
