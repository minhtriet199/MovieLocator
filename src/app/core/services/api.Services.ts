import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DataResult } from '../interfaces/api.model';

@Injectable()
export class ApiService {
  constructor(private _http: HttpClient) {}

  private readonly apiUrl: string = 'https://unogs-unogs-v1.p.rapidapi.com/';

  private params: HttpParams | string | string[]= '';

  private GetParams(data: any): HttpParams {
    let params = new HttpParams();
    Object.keys(data).forEach(function (key) {
      params = params.append(key, data[key] == null ? '' : data[key]);
    });
    return params;
  }

  public Params(params: HttpParams | string | string[] | any) {
    if (params instanceof Object) {
      this.params = this.GetParams(params);
    } else {
      this.params = params;
    }
    return this;
  }

  private getParams(): HttpParams {
    if (this.params == null) {
      return new HttpParams();
    } else if (this.params instanceof HttpParams) {
      return this.params;
    } else if (typeof this.params === 'string') {
      return new HttpParams({ fromString: this.params });
    } else if (Array.isArray(this.params)) {
      let httpParams = new HttpParams();
      this.params.forEach((param: string) => {
        const [key, value] = param.split('='); // Split each string by '=' to get key-value pair
        httpParams = httpParams.set(key, value || ''); // Set each parameter in HttpParams
      });
      return httpParams;
    } else {
      return new HttpParams();
    }
  }

  public getData<T>(extendedParams: string): Observable<T> {
    return this._http
      .get<T>(this.apiUrl + extendedParams, {
        params: this.getParams(),
      })
      .pipe(
        map((res) => {
          return res;
        })
      );
  }


  public getMovie(Path: string, params: any): Observable<any> {
    return this.Params(params)
               .getData<DataResult>(Path);
  }
}
