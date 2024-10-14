import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.scss'
})
export class CommentsComponent {

  comments = [
    {
      name: "V. Schuster - Team Partner",
      img: "./assets/img/schuster.png",
      message: "comment1"
    },
    {
      name: "E. Eichinger - Team Partner",
      img: "./assets/img/eichinger.png",
      message: "comment2"
    },
    {
      name: "I. Nuber - Frontend Developer",
      img: "./assets/img/nuber.png",
      message: "comment3"
    }
  ];

  currentCommentIndex = 0;

  nextComment() {
    if (this.currentCommentIndex < this.comments.length - 1) {
      this.currentCommentIndex++;
    } else {
      this.currentCommentIndex = 0; 
    }
  }

  prevComment() {
    if (this.currentCommentIndex > 0) {
      this.currentCommentIndex--;
    } else {
      this.currentCommentIndex = this.comments.length - 1; 
    }
  }
}

