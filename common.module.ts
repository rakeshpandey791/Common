import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Component1Component } from './Component1/component1.component';

@NgModule({
  declarations: [Component1Component],
  imports: [BrowserModule],
  providers: [],
  exports: [Component1Component]
})

export class CommonModule {}
