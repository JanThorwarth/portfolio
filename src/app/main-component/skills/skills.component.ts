import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [NgClass],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

  hover: boolean = false;

  

}
