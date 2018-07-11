import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { stringify } from 'querystring';

@Injectable()
export class NamesService {

  url:string = "http://uinames.com/api/?amount=1";

  constructor(private http: HttpClient ) { }

  getNames():any{
    return this.http.get(this.url);
    
  }

}
