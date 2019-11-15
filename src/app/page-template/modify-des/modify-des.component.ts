import { Component, OnInit, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-modify-des',
  templateUrl: './modify-des.component.html',
  styleUrls: ['./modify-des.component.scss']
})
export class ModifyDesComponent implements OnInit {
  @HostBinding('class')
  cls = 'farris-main-area flex-column';
  constructor(private router: Router) { }

  ngOnInit() {
  }
  // 点击转跳
  navigateTo(url: string) {
    this.router.navigateByUrl(url);
  }
}
