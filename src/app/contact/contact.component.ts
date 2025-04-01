import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  successMessage = '';
  errorMessage = '';
  isLoading = false;
  isSuccess = false;
  apiurl = "https://murfwood.com/api/contactus"; //start with prod



  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.contactForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      // Added a minimum length validation for the message field
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  ngOnInit(): void { }

  onSubmit(): void {
    if (this.contactForm.invalid) {
      // Mark all controls as touched to trigger validation messages
      this.contactForm.markAllAsTouched();
      return;
    }
    this.isLoading = true;

    if (isLocalhost()) {
      // Code to execute if the host is localhost
      this.apiurl = "http://localhost:5022/api/contactus";
      console.log('Running on localhost');
    } else {
    //  // Code to execute if the host is a production domain
      console.log('Running on production');
    }
    console.log("serv: " + this.apiurl);

    // dev this.http.post(this.apiurl, this.contactForm.value) //dev
    this.http.post(this.apiurl , this.contactForm.value) //production
      .subscribe({
        next: () => {
          this.successMessage = 'Your message has been sent successfully.';
          this.errorMessage = '';
          this.contactForm.reset();
          this.isSuccess = true;
          this.isLoading = false;
        },
        error: (error) => {
          this.errorMessage = 'There was an error sending your message. Please try again or you can directly email messages@murfwood.com ';
          console.error(error);
          this.isLoading = false;
        }
      });

    function isLocalhost(): boolean {
      const hostname = window.location.hostname;
      return hostname === 'localhost' || hostname === '127.0.0.1' || hostname === '[::1]';
    }
  }

  // Helper getters for easier access in the template
  get firstname() {
    return this.contactForm.get('firstname');
  }

  get lastname() {
    return this.contactForm.get('lastname');
  }

  get email() {
    return this.contactForm.get('email');
  }

  get subject() {
    return this.contactForm.get('subject');
  }

  get message() {
    return this.contactForm.get('message');
  }
}
