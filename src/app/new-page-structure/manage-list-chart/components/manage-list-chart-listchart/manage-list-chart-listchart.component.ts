import { Component, OnInit } from '@angular/core';
import { PageService } from '../../../service/page.service';
import { graphic } from 'echarts';

@Component({
  selector: 'manage-list-chart-listchart',
  templateUrl: './manage-list-chart-listchart.component.html',
  styleUrls: ['./manage-list-chart-listchart.component.scss']
})
export class ManageListChartListchartComponent implements OnInit {
  orderListData = [];
  total = 0;
  options: any;
  detectEventChanges = true;
  data = [];
  dataseries = []

  constructor(private orderService: PageService) { 
    this.orderService.viewList().subscribe((data: any) => {
      this.orderListData = data;
      this.total = data.length;
      if(this.orderListData.length){
        this.orderListData.forEach(listItem=>{
          this.data.push(listItem['KHMC']);
          this.dataseries.push(listItem['ZJE']);
        })
      }
      this.options = {
          title : {
              text: '销售订单管理',
              subtext: '各单位销售订单柱状图'
          },
          tooltip : {
              trigger: 'axis'
          },
          legend: {
              data:['订单总金额']
          },
          toolbox: {
              show : true,
              feature : {
                  mark : {show: true},
                  dataView : {show: true, readOnly: false},
                  magicType : {show: true, type: ['line', 'bar']},
                  restore : {show: true},
                  saveAsImage : {show: true}
              }
          },
          calculable : true,
          xAxis : [
              {
                  type : 'category',
                  data : this.data
              }
          ],
          yAxis : [
              {
                  type : 'value'
              }
          ],
          series : [
              {
                  name:'订单总金额',
                  type:'bar',
                  data:this.dataseries,
                  markPoint : {
                      data : [
                          {type : 'max', name: '最大值'},
                          {type : 'min', name: '最小值'}
                      ]
                  },
                  markLine : {
                      data : [
                          {type : 'average', name: '平均值'}
                      ]
                  }
              }
          ]
      };

    });
  }

  ngOnInit() {
    
  }

  onChartEvent(event: any, type: string) {
    //console.log('chart event:', type, event);
  }

}
