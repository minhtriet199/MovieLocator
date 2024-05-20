import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslocoService } from '@ngneat/transloco';
import { BehaviorSubject } from 'rxjs';
import { DataStorage } from '../../systems/datastorage';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{
  constructor(private _router: Router,private _translocoService: TranslocoService) { }
  private userLocale = new BehaviorSubject<string>(DataStorage.getUserLocale());
  userLocale$ = this.userLocale.asObservable();
  searchBarFocus: boolean = false;

  ngOnInit() {
  }
  handleFocus(focus: boolean) {
    this.searchBarFocus = focus;
  }

  navigate() {
    this._router.navigate(['/test']);
  }
  onSubmit() {
    console.log('test');
  }

  changeLanguage(language: string) {
    DataStorage.setUserLocale(language);
    this.userLocale.next(language);
    this._translocoService.setActiveLang(language);
  }
}
