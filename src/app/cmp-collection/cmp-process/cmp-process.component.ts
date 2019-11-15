import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp-process',
  templateUrl: './cmp-process.component.html',
  styleUrls: ['./cmp-process.component.scss']
})
export class CmpProcessComponent implements OnInit {
  showCodeArea = false;
  private path = "assets/code/cmp-collection/";
  constructor() { }

  ngOnInit() {
  }
  getPath(pageName) {
    return this.path + pageName + ".html";
  }
}
