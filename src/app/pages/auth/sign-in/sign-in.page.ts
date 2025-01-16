import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage {
  signInForm: FormGroup;

  constructor(private fb: FormBuilder, private service: AuthService, private router: Router) {
    this.signInForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    if (this.signInForm.valid) {
      console.log('Form Submitted', this.signInForm.value);
      const value = this.signInForm.value;
      let obj: any = {
        "userName": value.username,
        "password": value.password
      }
      this.service.login(obj).subscribe((res: any) => {
        console.log(res);
        localStorage.setItem('_TOKEN_', res.token);
        this.router.navigate(['/authorized/patient']);
      });
    }

  }
}
