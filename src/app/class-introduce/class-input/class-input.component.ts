import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'class-input',
  templateUrl: './class-input.component.html',
  styleUrls: ['./class-input.component.scss']
})
export class ClassInputComponent implements OnInit {
  showCodeArea = false;
  private path = "assets/code/class-input/";
  constructor() { }

  ngOnInit() {
  }
  getPath(pageName) {
    return this.path + pageName + ".html";
  }
}
