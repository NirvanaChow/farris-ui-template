import { Component, OnInit } from '@angular/core';
import { PageService } from '../../../service/page.service';

@Component({
  selector: 'manage-list-chart-listcard',
  templateUrl: './manage-list-chart-listcard.component.html',
  styleUrls: ['./manage-list-chart-listcard.component.scss']
})
export class ManageListChartListcardComponent implements OnInit {
  orderListData = [];
  constructor(private orderService: PageService) {
    this.orderService.viewList().subscribe((data: any) => {
      this.orderListData = data;
    });
   }

  ngOnInit() {
    
  }

}
