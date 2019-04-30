import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Taku Nakagawa';
  links = [
    { name: 'Profile', urlPath: '' },
    { name: 'Works', urlPath: 'works' },
    { name: 'Skills', urlPath: 'skills' },
    { name: 'Blogs', urlPath: 'blogs' },
  ];
  activeLink = this.links[0];
}
