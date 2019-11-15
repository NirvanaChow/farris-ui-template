import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class OuterWizardService {

  constructor(private http: HttpClient) {

  }
   // 列表
   viewList() {
    return this.http.get('assets/data/order-list.json');
  }
}
