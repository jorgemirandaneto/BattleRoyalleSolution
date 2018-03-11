import { map } from 'rxjs/operators';
import { PcInfo } from './../models/PcInfo';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ServiceService {

  httpUrl = "http://www.mocky.io/v2/5aa414d63100008d1d26e318"

  constructor(private http: Http) { }

  getPCs() {
    return this.http.get(this.httpUrl)
  }
}
