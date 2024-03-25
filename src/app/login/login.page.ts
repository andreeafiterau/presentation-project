import { Component } from '@angular/core';
import { Form, FormControl, FormGroup, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  public form: FormGroup = new FormGroup({
    username: new FormControl(null,[Validators.required]),
    password: new FormControl(null,[Validators.required]),
  });

  constructor(private auth:AuthService) {}

  login() {
    this.form.markAllAsTouched();
    if(this.form.valid){
      this.auth.login(this.form.value);
    }
  }
}
