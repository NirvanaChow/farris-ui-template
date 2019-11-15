import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';
import { tap } from 'rxjs/operators/tap';
import { GridDataResult } from '@progress/kendo-angular-grid';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
@Injectable({
  providedIn: 'root'
})
export class OuterWizardService extends BehaviorSubject<any> {
  private orderUrl = 'assets/data/order-list.json';
  constructor(private http: HttpClient) {
    super(null);
  }

  private data: any;

  read() {
    if (this.data) {
      return super.next(this.data);
    }

    this.fetch()
      .pipe(
        tap(data => {
          this.data = data;
        })
      )
      .subscribe(data => {
        super.next(data);
      });
  }
  fetch(): Observable<GridDataResult> {
    return this.http.get(this.orderUrl).pipe(
      map(
        response =>
          <GridDataResult>{
            data: <any>response,
            total: 10
          }
      )
    );
  }
  getList() {
    return this.http.get(this.orderUrl).pipe(
      map(
        response =>
          <GridDataResult>{
            data: <any>response,
            total: 10
          }
      )
    );
  }
  // 卡片
  viewCard() {
    return this.http.get('assets/data/order-card-view.json');
  }
  // 树
  viewTreeGrid() {
    return this.http.get('assets/data/order-tree.json');
  }
}
