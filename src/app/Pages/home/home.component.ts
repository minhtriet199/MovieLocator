import { Component } from '@angular/core';
import { ApiResults, DataResult } from '../../core/interfaces/api.model';
import { DecodeHtmlEntitiesPipe } from '../../core/pipe/decodeHtmlPipe';
import { DataTransferServices } from '../../core/services/datatransfer';
import { MovieCardComponent } from '../../core/shared/components/moviecard.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: true,
  imports:[MovieCardComponent,DecodeHtmlEntitiesPipe],
})
export class HomeComponent {
  MoviesList?: ApiResults[];
  constructor(private _dataTransfer: DataTransferServices) {
    this._dataTransfer.dataSource$.subscribe((data:DataResult) => {
      this.MoviesList = data.results;
    });
  }

  ngOnInit() {
  }

}
