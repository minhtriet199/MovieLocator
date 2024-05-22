import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private readonly USER_LOCALE_KEY = 'userLocale';

  constructor() { }

  private isLocalStorageAvailable(): boolean {
    try {
      const testKey = '__localStorageTest__';
      localStorage.setItem(testKey, 'test');
      localStorage.removeItem(testKey);
      return true;
    } catch (e) {
      return false;
    }
  }

  setUserLocale(locale: string): void {
    if (this.isLocalStorageAvailable()) {
      localStorage.setItem(this.USER_LOCALE_KEY, locale);
    }
  }

  getUserLocale(): string | null {
    if (this.isLocalStorageAvailable()) {
      return localStorage.getItem(this.USER_LOCALE_KEY);
    } else {
      return 'en';
    }
  }

  removeUserLocale(): void {
    if (this.isLocalStorageAvailable()) {
      localStorage.removeItem(this.USER_LOCALE_KEY);
    } else {
    }
  }
}
