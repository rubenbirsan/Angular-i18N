import { Injectable, Inject, LOCALE_ID } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  private calendarLocaleDE = {
    closeText: "Ferig",
    prevText: "Zurück",
    nextText: "Weiter",
    currentText: "Heute",
    today: 'Heute',
    clear: 'Löschen',
    monthNames: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
    monthNamesShort: ["Jan", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"],
    dayNames: ["Sontag", "Montag", "Dienstag", "Mittwoch", "Donerstag", "Freitag", "Samstag"],
    dayNamesShort: ["Son", "Mon", "Die", "Mit", "Don", "Fre", "Sam"],
    dayNamesMin: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
    weekHeader: "Wk",
    dateFormat: "dd.mm.yy",
    firstDay: 1,
    firstDayOfWeek: 1,
    showMonthAfterYear: false,
    yearSuffix: ""
  };

  private calendarLocaleEN = {
    closeText: "Done",
    prevText: "Prev",
    nextText: "Next",
    currentText: "Today",
    today: 'Today',
    clear: 'Clear',
    monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    dayNamesMin: ["So", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    weekHeader: "Wk",
    dateFormat: "dd.mm.yy",
    firstDay: 1,
    firstDayOfWeek: 1,
    showMonthAfterYear: false,
    yearSuffix: ""
  };

  private calendarLocaleFR = {
    closeText: "Done",
    prevText: "Prev",
    nextText: "Next",
    currentText: "Today",
    today: "Aujourd'hui",
    clear: 'Effacer',
    monthNames: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
    monthNamesShort: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Jul', 'Août', 'Sep', 'Oct', 'Nov', 'Déc'],
    dayNames: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
    dayNamesShort: ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'],
    dayNamesMin: ["Di", "Lu", "Ma", "Me", "Je", "Ve", "Sa"],
    weekHeader: "Wk",
    dateFormat: "dd.mm.yy",
    firstDay: 1,
    firstDayOfWeek: 1,
    showMonthAfterYear: false,
    yearSuffix: ""
  };

  constructor(public translate: TranslateService) {
   }

  getCalendarData(){
    
    switch (this.translate.currentLang){
      case "de": {
        return this.calendarLocaleDE;
      }
      case "en": {
        return this.calendarLocaleEN;
      }
      case "fr": {
        return this.calendarLocaleFR;
      }
      default : {
        return this.calendarLocaleDE;
      }
    }  
  }
}
