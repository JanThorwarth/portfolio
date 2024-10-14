import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { AbovethefoldComponent } from './abovethefold/abovethefold.component';
import { CommentsComponent } from './comments/comments.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SkillsComponent } from './skills/skills.component';


@Component({
  selector: 'app-main-component',
  standalone: true,
  imports: [CommonModule, AboutmeComponent, AbovethefoldComponent, CommentsComponent, ContactComponent, HeaderComponent, PortfolioComponent, SkillsComponent],
  templateUrl: './main-component.component.html',
  styleUrl: './main-component.component.scss'
})
export class MainComponentComponent {

}
