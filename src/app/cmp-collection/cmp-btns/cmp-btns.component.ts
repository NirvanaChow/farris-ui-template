import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp-btns',
  templateUrl: './cmp-btns.component.html',
  styleUrls: ['./cmp-btns.component.scss']
})
export class CmpBtnsComponent implements OnInit {
  showCodeArea = false;
  private path = "assets/code/cmp-collection/";
  constructor() { }

  ngOnInit() { }
  dpSectionState(v) { }
  getPath(pageName) {
    return this.path + pageName + ".html";
  }
}
