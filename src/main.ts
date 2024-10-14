import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideTranslate } from './app/translate.providers';  // Falls du Übersetzungen hast

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideTranslate()  // Übersetzungs-Provider hinzufügen
  ]
}).catch(err => console.error(err));

