import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  signUpForm: FormGroup;

  constructor(private fb: FormBuilder, private service: AuthService) {
    this.signUpForm = this.fb.group({
      name: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      role: ['', Validators.required],
    }, { validator: this.passwordMatchValidator });
  }
  ngOnInit(): void {

  }

  passwordMatchValidator(group: FormGroup) {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { mismatch: true };
  }

  onSubmit() {
    if (this.signUpForm.valid) {
      console.log('Form Submitted', this.signUpForm.value);
      const value = this.signUpForm.value;
      let obj: any = {
        "userName": value.name,
        "password": value.password,
        "role": value.role
      }
      this.service.signUp(obj).subscribe((res: any) => {
        console.log(res);

      });
    }
  }
}