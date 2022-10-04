import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button/button-module';
import { MatMenuModule } from '@angular/material/menu/menu-module';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    CommonModule,
    MatButtonModule,
    MatMenuModule

  ],
  declarations: [MenuComponent],
  exports: [MenuComponent],
})
export class LayoutModule { }