// app.component.ts

import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { MainComponentComponent } from './main-component/main-component.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ImprintComponent } from './imprint/imprint.component';
import { HeaderComponent } from './main-component/header/header.component';


@Component({
  selector: 'app-root',
  standalone: true,  // Da es sich um eine Standalone-Komponente handelt
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [CommonModule,RouterModule, TranslateModule, RouterOutlet, MainComponentComponent, FooterComponent, ImprintComponent, HeaderComponent]  // Füge TranslateModule zu den Importen hinzu
})
export class AppComponent {
  constructor() {}
 
}
