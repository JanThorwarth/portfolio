import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.scss'
})
export class CommentsComponent {

  comments = [
    {
      name: "V. Schuster",
      img: "./assets/img/schuster.png",
      message: "Michael really kept the team together with his great organization and clear communication. We wouldn't have got this far without his commitment."
    },
    {
      name: "E. Eichinger",
      img: "./assets/img/eichinger.png",
      message: "Michi was a top team colleague at DA. His positive commitment and willingness to take on responsibility made a significant contribution to us achieving our goals"
    },
    {
      name: "I. Nuber",
      img: "./assets/img/nuber.png",
      message: "It was a great pleasure to work with Michael. He knows how to push and encourage team members to present the best work possible, always adding something to brainstorm. Regarding the well-being of group members, he was always present and available to listen and help others, with a great sense of humor as well."
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

