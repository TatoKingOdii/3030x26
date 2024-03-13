import { Route, Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const appRoutes: Routes = [
  {path: '**', component: AppComponent}
];

export const INJECTABLES = [] as const;

