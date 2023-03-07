import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { UserserviceService } from 'src/app/services/userservice.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  angForm: any;
  constructor(private fb: FormBuilder,private userservice: UserserviceService,private router:Router) {
    this.angForm = this.fb.group({
      email: ['', [Validators.required,Validators.minLength(1), Validators.email]],
      pass: ['', Validators.required]
 
    });
   }
 
  ngOnInit() {
  }
  postdata(angForm1:NgForm) {
    this.userservice.userlogin(angForm1.value.email,angForm1.value.pass)
      .pipe(first())
      .subscribe(data => {
                const redirect = this.userservice.redirectUrl ? this.userservice.redirectUrl : '/chat';
                this.router.navigate(['/chat']);
                
          },
          error => {
              alert("User name or password is incorrect or your account was not found")
          });
  }


  get email() { return this.angForm.get('email'); }
  get pass() { return this.angForm.get('pass'); }
  
}
