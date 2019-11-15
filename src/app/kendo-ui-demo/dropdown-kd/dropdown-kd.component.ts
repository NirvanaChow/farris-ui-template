import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown-kd',
  templateUrl: './dropdown-kd.component.html',
  styleUrls: ['./dropdown-kd.component.scss']
})
export class DropdownKdComponent implements OnInit {
  public listItems: Array<string> = [
    'Baseball',
    'Basketball',
    'Cricket',
    'Field Hockey',
    'Football',
    'Table Tennis',
    'Tennis',
    'Volleyball'
  ];

  public value = ['Basketball', 'Cricket'];
  constructor() {}

  ngOnInit() {}
}
