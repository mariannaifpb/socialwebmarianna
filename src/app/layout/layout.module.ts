import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button/button-module';
import { MatMenuModule } from '@angular/material/menu/menu-module';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    MatButtonModule,
    MatMenuModule

  ],
  declarations: [MenuComponent],
  export: [MenuComponent],
})
export class LayoutModule { }