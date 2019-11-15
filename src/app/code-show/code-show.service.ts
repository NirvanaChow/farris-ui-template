import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable()
export class CodeShowService {
  constructor(private http: HttpClient) {}
  getDocCode(url: string, callback?: Function) {
      this.http.get(url, { responseType: 'text' }).subscribe(data => {
        callback(data)
      })
  }
}