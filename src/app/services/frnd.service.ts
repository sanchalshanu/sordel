import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { book } from "../book";

@Injectable({
  providedIn: 'root'
})
export class FrndService {
  private url = "assets/datalist.json";

  constructor(private inst:HttpClient) { }
  public getjson(): Observable<book[]>{
    return this.inst.get(this.url);
  };
}
``