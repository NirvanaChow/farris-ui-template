import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeShowModule } from '../code-show/code-show.module';
import { PageLayoutComponent } from './page-layout/page-layout.component';
import { ClassIntroduceModuleRouter } from './class-introduce.routes';
import { ClassFlexComponent } from './class-flex/class-flex.component';
import { ClassHiddenComponent } from './class-hidden/class-hidden.component';
import { ClassFormComponent } from './class-form/class-form.component';
import { ClassInputComponent } from './class-input/class-input.component';
import { VerifyFlexComponent } from './verify-flex/verify-flex.component';
import { VerifyGridComponent } from './verify-grid/verify-grid.component';
import { ClassImageComponent } from './class-image/class-image.component';

@NgModule({
  imports: [CommonModule, ClassIntroduceModuleRouter, CodeShowModule],
  declarations: [
    PageLayoutComponent,
    ClassFlexComponent,
    ClassHiddenComponent,
    ClassFormComponent,
    ClassInputComponent,
    VerifyFlexComponent,
    VerifyGridComponent,
    ClassImageComponent
  ]
})
export class ClassIntroduceModule {}
