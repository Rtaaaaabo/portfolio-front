import { Injectable } from '@angular/core';
import { Links } from './interface';
import { LINKS } from './date-interface';

@Injectable({
  providedIn: 'root'
})
export class TabsService {

  constructor() { }

  getTabInfo(): Links[] {
    return LINKS;
  }

  putTabInfo(linkTab) {
    let links = LINKS;
    links = linkTab;
    console.log(links);
    return links;
  }
}

