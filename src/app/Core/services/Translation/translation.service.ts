import { isPlatformBrowser } from '@angular/common';
import { inject, Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  defaultLang = 'en';
  private translateService: TranslateService = inject(TranslateService)

   constructor(@Inject(PLATFORM_ID) private platformId: Object) {
     if (isPlatformBrowser(this.platformId)) {
       const savedLang = localStorage.getItem('lng');
       if (savedLang) {
         this.defaultLang = savedLang;
       }
       this.translateService.setDefaultLang(this.defaultLang);
       this.translateService.use(this.defaultLang);
       this.ChangeDir()
     }
     
   }

   changeLang(lang: string) {
     this.translateService.use(lang);
     if (isPlatformBrowser(this.platformId)) {
       localStorage.setItem('lng', lang);
       this.ChangeDir()
     }
   }
   ChangeDir()
   {
    const savedLang = localStorage.getItem('lng');
    if(savedLang=="en")
    {
      document.body.dir="ltr"
    }
    else if(savedLang=="ar")
    {
      document.body.dir="rtl"
    }
   }
}
