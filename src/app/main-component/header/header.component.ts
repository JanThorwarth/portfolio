import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';  // Importiere den TranslateService
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgClass, AppComponent, TranslateModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en');
    this.translate.use('en'); // Oder die Sprache, die du ver
  }

  menuOpen: boolean = false;
  selectedLang: string = "en";

  toggleMenu() {
    this.menuOpen = !this.menuOpen;

    if (this.menuOpen) {
      document.documentElement.style.overflow = 'hidden';  
    } else {
      document.documentElement.style.overflow = '';  
    }
  }

  switchLanguage(lang: string) {
    this.selectedLang = lang;
    this.translate.use(lang);
  }

}
