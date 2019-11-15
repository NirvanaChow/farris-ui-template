import { Component, OnInit } from '@angular/core';
import { mockdata } from './mockdata/mockList';

@Component({
  selector: 'npt-common-filter',
  templateUrl: './npt-common-filter.component.html',
  styleUrls: ['./npt-common-filter.component.scss']
})
export class NptCommonFilterComponent implements OnInit {

  // lookupEmpee = '田玉';
  // groupIcon = '<span class="k-icon k-i-search"></span>';

  filterList:any[] = mockdata;

  constructor() { }

  ngOnInit() {
  }

  onSearch(event){
    console.log(event);
  }

}
