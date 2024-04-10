import { ApplicationConfig } from '@angular/core';
import { RouterModule, provideRouter } from '@angular/router';
import { MaterialModule } from './material.module';
import { AppRoutes, routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
// import { ApiService } from './services/api.service';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
// import {MatToolbarModule} from '@angular/material/toolbar';


export const appConfig = {
  imports:[
    MaterialModule,
    HttpClientModule,
    // AppRoutes,
    RouterModule,
  ],
  providers: [provideRouter(routes), provideClientHydration(), provideAnimationsAsync(), provideAnimationsAsync(),provideHttpClient(withFetch())]
};
