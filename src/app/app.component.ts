import { Component, OnInit } from '@angular/core';
import { Links } from './interface';

import { TabsService } from './tabs.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private tabsService: TabsService) {}

  title = 'Taku Nakagawa';
  links: Links[];

  getTabInfo(): void {
  this.links = this.tabsService.getTabInfo();
  }

  onSelect(link) {
    for (const value of this.links) {
      value.activedTab = false;
      if (value.name === link.name) {
        value.activedTab = true;
      }
    }
    this.tabsService.putTabInfo(this.links);
  }

  ngOnInit() {
    this.getTabInfo();
    console.log(this.links);
  }

}
