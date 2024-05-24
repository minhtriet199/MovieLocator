import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataTransferServices {
  private dataSource = new BehaviorSubject<any>('');
  dataSource$ = this.dataSource.asObservable();
  updateDataSource(data: any) {
    this.dataSource.next(data)
  }

}
