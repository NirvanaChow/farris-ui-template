import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PageService {
  constructor(private http: HttpClient) {}

  private data: any;
  // 卡片
  viewCard() {
    return this.http.get('assets/data/order-card-view.json');
  }
  // 树
  viewTreeGrid() {
    return this.http.get('assets/data/order-tree.json');
  }
  // 列表
  viewList() {
    return this.http.get('assets/data/order-list.json');
  }
  //物料
  viewMaterial() {
    return this.http.get('assets/data/order-material.json');
  }
}
