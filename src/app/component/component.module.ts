import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfilesComponent } from '../profiles/profiles.component';


@NgModule({
  declarations: [
    ProfilesComponent
  ],
  imports: [
    CommonModule,
  ],
  exports : [
    ProfilesComponent
  ]
})
export class ComponentModule { }
