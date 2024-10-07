import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MainComponentComponent } from "./main-component/main-component.component";
import { FooterComponent } from './shared/footer/footer.component';
import { ImprintComponent } from './imprint/imprint.component';
import { HeaderComponent } from './main-component/header/header.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MainComponentComponent, FooterComponent, ImprintComponent, HeaderComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
}
