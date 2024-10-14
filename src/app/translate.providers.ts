// translate.providers.ts

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { Provider } from '@angular/core';

// Funktion, die den HTTP-Loader erstellt
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');  // Angepasster Pfad zu deinen Übersetzungsdateien
}

// Funktion, die den Translate-Provider bereitstellt
export function provideTranslate(): Provider[] {
  return [
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }).providers!
  ];
}
