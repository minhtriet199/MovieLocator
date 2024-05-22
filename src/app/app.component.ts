import { Component, OnInit } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { LocalStorageService } from './core/services/localStorageService';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'MovieLocator';

  constructor(private _translocoService: TranslocoService,private _localStorageService: LocalStorageService) { }
  ngOnInit() {
    let userLocale: string | null = this._localStorageService.getUserLocale();
    this._translocoService.setActiveLang(userLocale ?? 'en');
  }
}
