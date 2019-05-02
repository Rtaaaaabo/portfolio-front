import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule } from '@angular/material';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatTabsModule,
    MatCardModule,
    MatMenuModule,
    MatGridListModule
  ],
  exports: [
    MatButtonModule,
    MatToolbarModule,
    MatTabsModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatGridListModule,
  ]
})
export class CustomMaterialModule {}
