import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  
  imports: [
    CommonModule,
    LayoutRoutingModule,Ng2SearchPipeModule
  ]
})
export class LayoutModule { }
