import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

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
  public show_err_msg = false;

  constructor(private auth:AuthService) {}

  login() {
    this.form.markAllAsTouched();
    if(this.form.valid){
      //check if login function result is false, and if it is show error message
      if(!this.auth.login(this.form.value)){
        this.show_err_msg = true;
      }
    }
  }
}
