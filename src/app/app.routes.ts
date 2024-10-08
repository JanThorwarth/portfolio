import { Routes } from '@angular/router';
import { ImprintComponent } from './imprint/imprint.component';
import { MainComponentComponent } from './main-component/main-component.component';
import { PrivacPpolicyComponent } from './privac-ppolicy/privac-ppolicy.component';

export const routes: Routes = [
    { path: '', component: MainComponentComponent, },
    { path: 'imprint', component: ImprintComponent },
    { path: 'privacyPolicy', component: PrivacPpolicyComponent }
];
