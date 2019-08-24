import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfilesComponent } from './components/profiles/profiles.component';
import { WorksComponent } from './components/works/works.component';
import { SkillsComponent } from './components/skills/skills.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { AdminComponent } from './components/admin/admin.component';

const routes: Routes = [
  { path: '', redirectTo: '/profile', pathMatch: 'full' },
  { path: 'profile', component: ProfilesComponent },
  { path: 'works', component: WorksComponent },
  { path: 'experience', component: SkillsComponent },
  { path: 'blogs', component: BlogsComponent },
  { path: 'admin', component: AdminComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
