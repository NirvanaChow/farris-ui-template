import { Component, OnInit, HostBinding } from '@angular/core';
import { OrderListService } from '../service/order-list.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list-scroll',
  templateUrl: './list-scroll.component.html',
  styleUrls: ['./list-scroll.component.css']
})
export class ListScrollComponent implements OnInit {
  @HostBinding('class')
  cls = 'farris-main-area flex-column';

  orderListData = [];
  constructor(private router: Router, private orderService: OrderListService) {}

  ngOnInit() {
    this.orderService.subscribe(data => {
      if (!data) {
        return;
      }
      this.orderListData = data;
    });
    this.orderService.read();
  }

  // 点击转跳
  navigateTo(url: string) {
    this.router.navigateByUrl(url);
  }
}
