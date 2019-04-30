import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Taku Nakagawa';
  links = ['Profile', 'Works', 'Skills', 'Blogs'];
  activeLink = this.links[0];
}
