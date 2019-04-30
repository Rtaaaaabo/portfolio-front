import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfilesComponent } from './profiles/profiles.component';
import { WorksComponent } from './works/works.component';
import { SkillsComponent } from './skills/skills.component';
import { BlogsComponent } from './blogs/blogs.component';

const routes: Routes = [
  {path: '', component : ProfilesComponent},
  { path: 'works', component: WorksComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'blogs', component: BlogsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
