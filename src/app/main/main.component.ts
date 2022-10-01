import { ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CalendarService } from '../shared/services/calendar.service';
import { TranslateCacheService } from 'ngx-translate-cache';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainComponent implements OnInit {

  public number = 10000;
  public today = Date.now();

  constructor(public translate: TranslateService,
              public translateCacheService: TranslateCacheService,
              public calendarService: CalendarService) {
    
    // let lang = translateCacheService.getCachedLanguage();
    let lang = null;
    translate.use(lang != null && lang.match(/de|en|fr/) ? lang : translate.currentLang ?? 'de');    
  }

  ngOnInit(): void {
  }

  minutes = 0;
  gender = 'female';
  inc(i: number) {
    this.minutes = Math.min(5, Math.max(0, this.minutes + i));
  }

  male() { this.gender = 'male'; }
  female() { this.gender = 'female'; }
  other() { this.gender = 'other'; }

  changeLanguage(language: string) {
    this.translate.use(language);
  }

  getCalendarData(){
    return  this.calendarService.getCalendarData();
  }
}
