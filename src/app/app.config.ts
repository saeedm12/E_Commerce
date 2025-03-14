import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { HttpClient, provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';
import { headerInterceptor } from './Core/Interceptors/Headers/header.interceptor';
import { NgxSpinnerModule } from "ngx-spinner";
import { errorInterceptor } from './Core/Interceptors/Error/error.interceptor';
import { loadingInterceptor } from './Core/Interceptors/Loading/loading.interceptor';

import { TranslateHttpLoader } from '@ngx-translate/http-loader';
 import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

 export function HttpLoaderFactory(http: HttpClient) {
   return new TranslateHttpLoader(http, './i18n/', '.json');
 }


export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes,withInMemoryScrolling({scrollPositionRestoration:'enabled'})), provideClientHydration(withEventReplay()
),
provideHttpClient(withInterceptors([])),
provideAnimations(),
provideToastr(),
importProvidersFrom(NgxSpinnerModule,

  TranslateModule.forRoot({
    loader: {
      provide: TranslateLoader,
      useFactory: HttpLoaderFactory,
      deps: [HttpClient]
    }
  })

),

]
};
