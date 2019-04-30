import { Component, OnInit } from '@angular/core';
import { Links } from './interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  selectedTab;

  title = 'Taku Nakagawa';
  links: Links[] = [
    { name: 'Profile', urlPath: 'profile', activedTab: false },
    { name: 'Works', urlPath: 'works', activedTab: false },
    { name: 'Skills', urlPath: 'skills', activedTab: false },
    { name: 'Blogs', urlPath: 'blogs', activedTab: false },
  ];

  onSelect(link) {
    for (const value of this.links) {
      value.activedTab = false;
      if (value.name === link.name) {
        value.activedTab = true;
      }
      console.log(this.links);
    }
  }

  ngOnInit() {
    console.log(this.links);
  }

}
