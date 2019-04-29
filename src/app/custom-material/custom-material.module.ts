import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule } from '@angular/material';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatTabsModule,
  ],
  exports : [
    MatButtonModule,
    MatToolbarModule,
    MatTabsModule,
  ]
})
export class CustomMaterialModule { }
