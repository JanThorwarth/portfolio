import { NgClass } from '@angular/common';
import { Component, HostListener, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgClass],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

menuOpen: boolean = false;




  toggleMenu() {
    this.menuOpen = !this.menuOpen;

   
    if (this.menuOpen) {
     
      document.documentElement.style.overflow = 'hidden';  
    } else {
    
      document.documentElement.style.overflow = '';  
    }
  }
}

