import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Taku Nakagawa';
  links = ['Profile', 'Works', 'Skills', 'Blogs'];
  activeLinks = this.links[0];
}
