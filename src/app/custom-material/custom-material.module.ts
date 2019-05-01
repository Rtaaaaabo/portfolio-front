import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule } from '@angular/material';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatTabsModule,
    MatCardModule,
    MatMenuModule,
  ],
  exports : [
    MatButtonModule,
    MatToolbarModule,
    MatTabsModule,
    MatCardModule,
    MatMenuModule
  ]
})
export class CustomMaterialModule { }
