import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslateCacheService } from 'ngx-translate-cache';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  constructor(public translate: TranslateService,
              public translateCacheService: TranslateCacheService) {

      // let lang = translateCacheService.getCachedLanguage();
      let lang = null;
      translate.use(lang != null && lang.match(/de|en|fr/) ? lang : translate.currentLang ?? 'de');    
    }
  
    ngOnInit(): void {
    }

  changeLanguage(language: string) {
    this.translate.use(language);
  }
}
