import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslocoService } from '@ngneat/transloco';
import { LocalStorageService } from '../../services/localStorageService';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{
  constructor(private _router: Router,private _translocoService: TranslocoService,private _localStorageService: LocalStorageService) { }
  userLocale:string | null = this._localStorageService.getUserLocale();
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
    this._localStorageService.setUserLocale(this.userLocale = language);
    this._translocoService.setActiveLang(language);
  }
}
