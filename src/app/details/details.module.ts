import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsRoutingModule } from './details-routing.module';
import { DetailsComponent } from './details.component';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { MultiTranslateHttpLoader} from "ngx-translate-multi-http-loader";
import { SharedModule } from '../shared/shared.module';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, './assets/i18n/details/', '.json');
}

export function MultiHttpLoaderFactory(http: HttpClient) {
  return new MultiTranslateHttpLoader(http, [   
     {prefix: "./assets/i18n/details/", suffix: ".json"}
  ]);
}

@NgModule({
  declarations: [DetailsComponent],
  imports: [
    CommonModule,
    DetailsRoutingModule,
    HttpClientModule,
    SharedModule,
    TranslateModule.forChild({
      loader: {
          provide: TranslateLoader,
          useFactory: MultiHttpLoaderFactory,
          deps: [HttpClient]
      }, 
      extend: true,
      })
  ]
})
export class DetailsModule { }

