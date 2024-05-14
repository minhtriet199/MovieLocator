import { LOCALE_ID } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import moment from 'moment';
import { AppModule } from './app/app.module';
window['moment'] = moment;

export function getBaseUrl() {
  return document.getElementsByTagName('base')[0].href;
}

const providers = [{ provide: 'BASE_URL', useFactory: getBaseUrl, deps: [] }];

platformBrowserDynamic(providers)
  .bootstrapModule(AppModule, {
    providers: [{ provide: LOCALE_ID, useValue: 'vi_VN' }],
  })
  .catch(err => console.error(err));
