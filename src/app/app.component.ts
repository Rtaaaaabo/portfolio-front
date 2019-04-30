import { Component, OnInit } from '@angular/core';
import { Links } from './interface';
import { LINKS } from './date-interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  selectedTab;

  title = 'Taku Nakagawa';
  links = LINKS;

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
