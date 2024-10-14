import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [NgClass, TranslateModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

  hover: boolean = false;

  

}
