import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { UserserviceService } from 'src/app/services/userservice.service';
import { DomSanitizer } from '@angular/platform-browser';


@Component({ selector: 'app-register', 
templateUrl: './register.component.html', 
styleUrls: ['./register.component.scss'] }) 

export class RegisterComponent implements OnInit {
  
    angForm: any;
    constructor(private fb: FormBuilder,private userservice: UserserviceService,private router:Router) {
   
      this.angForm = this.fb.group({
        fname: ['', Validators.required],
        lname: ['', Validators.required],
        email: ['', [Validators.required,Validators.minLength(1), Validators.email]],
        pass: ['', Validators.required],
        avatar: ['', Validators.required],
        status: ['',]
      });
     }
   
     archivo = {
      nombreArchivo: null,
      base64textString: ""
    }

    ngOnInit() {
    }
    postdata(angForm1:NgForm){
      angForm1.value.avatar = this.archivo.nombreArchivo;
      if(angForm1.value.fname == '' || angForm1.value.lname == '' || angForm1.value.email == '' || angForm1.value.pass == '' || angForm1.value.avatar == '' || angForm1.value.status == ''){
       alert("Completed the form PLEASE!!!")
      } else {
      this.userservice.userregistration(angForm1.value.fname,angForm1.value.lname,angForm1.value.email,angForm1.value.pass,angForm1.value.avatar,angForm1.value.status)
        .pipe(first())
        .subscribe(
            data => {
              this.router.navigate(['/login']);
            },
            error => {
            });
            
            this.upload();
          }
    }

   seleccionarArchivo(event:any) {
    var files = event.target.files;
    var file = files[0];
    this.archivo.nombreArchivo = file.name;

    if(files && file) {
      var reader = new FileReader();
      reader.onload = this._handleReaderLoaded.bind(this);
      reader.readAsBinaryString(file);
    }
  }

  _handleReaderLoaded(readerEvent:any) {
    var binaryString = readerEvent.target.result;
    this.archivo.base64textString = btoa(binaryString);
    
  }

  upload() {
    // console.log(this.archivo);
    this.userservice.uploadFile(this.archivo).subscribe(
      datos => {

      }
    );
  }

    get email() { return this.angForm.get('email'); }
    get pass() { return this.angForm.get('pass'); }
    get fname() { return this.angForm.get('fname'); }
    get lname() { return this.angForm.get('lname'); }
    get avatar() { return this.angForm.get('avatar'); }
    get status() { return this.angForm.get('status'); }

}
