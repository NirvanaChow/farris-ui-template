import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'class-form',
  templateUrl: './class-form.component.html',
  styleUrls: ['./class-form.component.scss']
})
export class ClassFormComponent implements OnInit {
  showCodeArea = false;
  private path = "assets/code/class-form/";
  constructor() { }

  ngOnInit() {
  }
  getPath(pageName) {
    return this.path + pageName + ".html";
  }
}
