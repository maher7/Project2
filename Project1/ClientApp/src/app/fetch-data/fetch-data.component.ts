import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})

export class FetchDataComponent {
  validEmail: any;
  baseUrl: string;
  emailValidationForm: FormGroup;

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.baseUrl = baseUrl;

    this.emailValidationForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required])
    });
  }
  
  ngOnInit() {
    
  }

  fetchEmailRecieved(email: string) {
    
   this.http.get<ValidEmail>(this.baseUrl + 'validemail?email=' + email).subscribe(result => {
      this.validEmail = result;
    }, error => {
      console.log(error);
      if (error.status == 429) {
        console.log(error)
      }
    }
    );

  }

  onSubmit() {
    if (this.emailValidationForm?.invalid) {
      return;
    }

  }


}

interface ValidEmail {
  email: string;
  date: Date;
}

