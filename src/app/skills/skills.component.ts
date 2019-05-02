import { Component, OnInit } from '@angular/core';
import { EXPERIENCE } from '../date-interface';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.sass']
})
export class SkillsComponent implements OnInit {
  dataSource = EXPERIENCE;
  displayedColumns: string[] = ['period', 'describe', 'skill', 'role'];

  constructor() {}

  ngOnInit() {}
}
