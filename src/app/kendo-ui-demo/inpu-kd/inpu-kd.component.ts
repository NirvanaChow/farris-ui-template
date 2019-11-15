import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inpu-kd',
  templateUrl: './inpu-kd.component.html',
  styleUrls: ['./inpu-kd.component.scss']
})
export class InpuKdComponent implements OnInit {
  public maskedValue: string;
  public sliderValue = 5;
  public numericValue = 5;
  public switchValue = false;
  public switchValue2 = true;
  public min = 0;
  public max = 10;
  public smallStep = 1;
  constructor() { }

  ngOnInit() {
  }

}
