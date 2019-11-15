import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'npt-common-scheme',
  templateUrl: './npt-common-scheme.component.html',
  styleUrls: ['./npt-common-scheme.component.scss']
})
export class NptCommonSchemeComponent implements OnInit {
  
  @HostBinding('class.f-component-scheme') cls = true;
  constructor() {}

  ngOnInit() {}
}
