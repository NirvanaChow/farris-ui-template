import { Component, OnInit } from '@angular/core';
import { PageService } from '../../../service/page.service';

@Component({
  selector: 'manage-list-chart-listview',
  templateUrl: './manage-list-chart-listview.component.html',
  styleUrls: ['./manage-list-chart-listview.component.scss']
})
export class ManageListChartListviewComponent implements OnInit {

  orderListData = [];
  constructor(private orderService: PageService) {
    this.orderService.viewList().subscribe((data: any) => {
      this.orderListData = data;
    });
   }

  ngOnInit() {
    
  }

}
