import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslocoService } from '@ngneat/transloco';
import { DataResult } from '../../../interfaces/api.model';
import { ApiService } from '../../../services/api.Services';
import { DataTransferServices } from '../../../services/datatransfer';
import { LocalStorageService } from '../../../services/localStorageService';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  constructor(
    private _router: Router,
    private _translocoService: TranslocoService,
    private _localStorageService: LocalStorageService,
    private _apiServices: ApiService,
    private _dataTransfer: DataTransferServices
  ) { }
  search?: string;
  userLocale: string | null = this._localStorageService.getUserLocale();
  searchBarFocus: boolean = false;

  ngOnInit() {
    // this.getList();
  }
  handleFocus(focus: boolean) {
    this.searchBarFocus = focus;
  }

  navigate() {
    this._router.navigate(['/test']);
  }
  onSubmit() {
    this.getList();
  }

  changeLanguage(language: string) {
    this._localStorageService.setUserLocale((this.userLocale = language));
    this._translocoService.setActiveLang(language);
  }

  getList() {
    const params = {
      limit:'20',
      order_by: 'date',
      'title': this.search
    };
    this._apiServices.getMovie('search/titles',params).subscribe((res: DataResult) => {
      this._dataTransfer.updateDataSource(res);
    })
  }
}
