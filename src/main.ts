import { HomePageComponent } from './app/components/pages/home-page/home-page.component';
import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { appConfig } from './app/app.config';




bootstrapApplication(HomePageComponent, appConfig)
  .catch((err) => console.error(err));


