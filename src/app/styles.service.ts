import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {environment } from 'environments/environment';

@Injectable()
export class StylesService {
BASE_URL: string = 'environment.apiBase';
  constructor(private http: Http) { }

  getList() {
     return this.http.get(`${this.BASE_URL}/api/styles`)
       .map((res) => res.json());
}

get(style) {
    return this.http.get(`${this.BASE_URL}/api/styles/${style}`)
      .map((res) => res.json());
  }
}
//   remove(id) {
//    return this.http.delete(`${this.BASE_URL}/api/phones/${id}`)
//      .map((res) => res.json());
//  }
// }
