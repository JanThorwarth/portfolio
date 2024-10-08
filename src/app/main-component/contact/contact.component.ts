import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm, NgModel, NgModelGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  ImgSrc: string = "./assets/img/checkbox-empty.png"

  contactsData = {
    name: "",
    email: "",
    message: "",
  }



  onSubmit(ngForm: NgForm) {
    if (ngForm.valid && ngForm.submitted) {
      console.log(this.contactsData);
    }
    

  }

  goToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });

  }
  acceptPolicy() {
    this.ImgSrc = this.ImgSrc === "./assets/img/checkbox-checked.png" ? "./assets/img/checkbox-empty.png": "./assets/img/checkbox-checked.png"
    

  }
}
