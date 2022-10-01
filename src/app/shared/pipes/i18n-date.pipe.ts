import {Inject, LOCALE_ID, Pipe} from '@angular/core';
import {DatePipe} from '@angular/common';
import {TranslateService} from '@ngx-translate/core';
import {LangChangeEvent} from '@ngx-translate/core/lib/translate.service';



@Pipe({
  name: 'i18nDate',
  pure: false
})
export class I18nDatePipe extends DatePipe {
  private changeSubs: any;

  constructor(@Inject(LOCALE_ID) locale: string,
              translate: TranslateService) {
    super(locale);
    this.changeSubs = translate.onLangChange.subscribe(($event: LangChangeEvent) => {
       (<any>this).locale = $event.lang;
    });
  }

  transform(value: any, format?: string, timezone?: string, locale?: string): string | null {
    return  super.transform(value, format, timezone, locale);
  }

}
