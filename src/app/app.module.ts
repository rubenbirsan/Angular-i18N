import { BrowserModule } from '@angular/platform-browser';
import { Injectable, NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule, HttpClient } from '@angular/common/http';

import localeDe from '@angular/common/locales/de';
import localeEn from '@angular/common/locales/en';
import localeFr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeDe);
registerLocaleData(localeEn);
registerLocaleData(localeFr);

import { I18nDatePipe } from './shared/pipes/i18n-date.pipe';
import { DetailsModule } from './details/details.module';
import { MainComponent } from './main/main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'primeng/calendar';

import { Observable, from} from 'rxjs';

import { TranslateModule, 
         TranslateService,
         TranslateLoader, 
         TranslateCompiler, 
         MissingTranslationHandlerParams, 
         MissingTranslationHandler  } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ModuleTranslateLoader, IModuleTranslationOptions} from "@larscom/ngx-translate-module-loader";
import { TranslateMessageFormatCompiler } from 'ngx-translate-messageformat-compiler';
import { TranslateCacheModule, TranslateCacheSettings, TranslateCacheService } from 'ngx-translate-cache';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, './assets/i18n/', '.json');
}

export class WebpackTranslateLoader implements TranslateLoader {
  getTranslation(lang: string): Observable<any> {
    return from(import(`../assets/i18n/${lang}.json`))
  }
}

export function ModuleHttpLoaderFactory(http: HttpClient) {
  const baseTranslateUrl = "./assets/i18n/splitted";
  const options: IModuleTranslationOptions = {
    translateError: (error, path) => {
      console.log("Fehler: ", { error, path });
    },
    modules: [
      // final url: ./assets/i18n/en.json
      { baseTranslateUrl },
      // final url: ./assets/i18n/part1/en.json
      { moduleName: "part1", baseTranslateUrl },
      // final url: ./assets/i18n/part2/en.json
      { moduleName: "part2", baseTranslateUrl }
    ]
  };
  return new ModuleTranslateLoader(http, options);
}

@Injectable()
export class MyMissingTranslationHandler implements MissingTranslationHandler {
  handle(params: MissingTranslationHandlerParams) {
    return 'Die Übersetzung fehlt';
  }
}

@NgModule({
  declarations: [
    AppComponent,
    I18nDatePipe,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DetailsModule,
    BrowserAnimationsModule,
    CalendarModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        // useClass: WebpackTranslateLoader,
        // useFactory: ModuleHttpLoaderFactory,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      compiler: {
        provide: TranslateCompiler,
        useClass: TranslateMessageFormatCompiler
      },
      missingTranslationHandler: { 
        provide: MissingTranslationHandler, 
        useClass: MyMissingTranslationHandler 
      },
      useDefaultLang: false
    }),
    TranslateCacheModule.forRoot({
      cacheService: {
        provide: TranslateCacheService,
        useFactory: (translateService, translateCacheSettings) => {
            return new TranslateCacheService(translateService, translateCacheSettings)
        },
        deps: [ TranslateService, TranslateCacheSettings ]
      },
      cacheName: 'lang', 
      cacheMechanism: 'LocalStorage', 
      cookieExpiry: 1, 
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
