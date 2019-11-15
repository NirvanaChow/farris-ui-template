import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightModule } from 'ngx-highlightjs';
import{CodeShowService} from'./code-show.service';

import { CodeShowComponent } from './code-show.component';

@NgModule({
  declarations: [CodeShowComponent],
  imports: [
    CommonModule,
    HighlightModule
  ],
  exports:[CodeShowComponent],
  providers:[CodeShowService]
})
export class CodeShowModule { }
