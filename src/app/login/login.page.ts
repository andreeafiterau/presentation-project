import { Component } from '@angular/core';
import { Form, FormControl, FormGroup, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  public form: FormGroup = new FormGroup({
    username: new FormControl(null,[Validators.required]),
    password: new FormControl(null,[Validators.required, Validators.min(6)]),
  });

  constructor(private router: Router) {
    //this.form = 
  }

  login() {

    if(this.form.valid){

          // Perform login logic (you should implement this)
    // For now, just navigate to the list page
    this.router.navigateByUrl('/list');
    }

  }
}
