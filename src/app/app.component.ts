import { Component, OnInit } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { DataStorage } from './core/systems/datastorage';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'MovieLocator';

  constructor(private _translocoService: TranslocoService) { }
  ngOnInit() {
    let userLocale: string = DataStorage.getUserLocale();

    this._translocoService.setActiveLang(userLocale);
  }
}
