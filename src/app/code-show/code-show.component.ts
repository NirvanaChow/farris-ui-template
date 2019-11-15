import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { CodeShowService } from './code-show.service';
@Component({
  selector: 'code-show',
  templateUrl: './code-show.component.html',
  styleUrls: ['./code-show.component.scss']
})
export class CodeShowComponent implements OnInit {
  // 控制是否要显示
  @Input('show') showCodeArea = false;
  // 控制code
  @Input('code') code = '';
  @Input() path: string;
  @Input('title') title = "";

  constructor(private el: ElementRef, private codeSer: CodeShowService) { }

  ngOnInit() {
    if (this.path) this.getCodeData(this.path);
  }
  getCodeData(path) {
    this.codeSer.getDocCode(path, res => {
      this.code = res
    });
  }
  copyDoc() {
    const target = this.el.nativeElement.querySelector('code')
    // 删除之前所有的选区
    window.getSelection().removeAllRanges()
    let range = document.createRange()
    let selection = window.getSelection()
    range.selectNode(target)
    selection.addRange(range)
    // 创建虚拟DOM 使用 document.execCommand (document.execCommand只能操作可编辑区域)
    const input = document.createElement('input')
    input.setAttribute('value', selection.toString())
    input.select();
    if (document.execCommand('copy')) {
      document.execCommand('copy')
    }
  }
  changState() {
    this.showCodeArea = !this.showCodeArea;
  }
}
