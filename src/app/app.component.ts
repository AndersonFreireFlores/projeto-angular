import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,HomePageComponent],
  template: `
  <app-header></app-header>
  <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'projeto-angular';
}
