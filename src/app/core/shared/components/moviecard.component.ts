import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'movie-card',
  templateUrl: './moviecard.component.html',
  styleUrls: ['./moviecard.component.scss'],
  standalone:true
})
export class MovieCardComponent implements OnInit {
  ngOnInit(): void {
    console.log('run');
  }
}
