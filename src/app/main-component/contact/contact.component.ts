import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm, NgModel, NgModelGroup } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule, TranslateModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  http = inject(HttpClient);

  ImgSrc: string = "./assets/img/checkbox-empty.png"

  contactsData = {
    name: "",
    email: "",
    message: "",
  }



  mailTest = true;

  post = {
    endPoint: 'https://jan-thorwarth.com/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactsData))
        .subscribe({
          next: (response) => {

            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {

      ngForm.resetForm();
    }
  }
  goToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });

  }
  acceptPolicy() {
    this.ImgSrc = this.ImgSrc === "./assets/img/checkbox-checked.png" ? "./assets/img/checkbox-empty.png": "./assets/img/checkbox-checked.png"
    

  }
}
