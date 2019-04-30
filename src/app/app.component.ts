import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  selectedTab = '';

  title = 'Taku Nakagawa';
  links = [
    { name: 'Profile', urlPath: 'profile' },
    { name: 'Works', urlPath: 'works' },
    { name: 'Skills', urlPath: 'skills' },
    { name: 'Blogs', urlPath: 'blogs' },
  ];

  onSelect(link) {
    this.selectedTab = link;
    console.log(this.selectedTab);
  }

  ngOnInit() {
    console.log('ngOnInit');
  }

}
