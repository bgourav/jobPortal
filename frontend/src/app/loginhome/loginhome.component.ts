import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PortalserviceService } from '../portalservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginhome',
  templateUrl: './loginhome.component.html',
  styleUrls: ['./loginhome.component.css']
})
export class LoginhomeComponent implements OnInit {

  sloginForm = this.fb.group({
    username: ['', Validators.required],
    psw: ['', Validators.required]
  });

  ploginForm = this.fb.group({
    username: ['', Validators.required],
    psw: ['', Validators.required]
  });

  forgot: boolean = false;
  signIn1: boolean = true;

  // forgot:boolean=false;
  signIn2: boolean = true;

  forgotpass: any = this.fb.group({
    "email": ['', [Validators.required, Validators.email]],
  });

  constructor(private fb: FormBuilder, private srv: PortalserviceService, private rout: Router) { }

  ngOnInit() {
  }

  slogin() {
    console.log(this.sloginForm.value);
    this.srv.sloginxyz(this.sloginForm.value).subscribe((data) => {
      if (data.status == 200) {
        alert("login Successfully");
        window.localStorage.setItem('key', data.token);
        this.rout.navigate(['/vacancies']);

      }
      else {
        alert("user Not Found");
      }
    })

  }

  plogin() {
    console.log(this.ploginForm.value);
    this.srv.ploginxyz(this.ploginForm.value).subscribe((data) => {
      if (data.status == 200) {
        alert("login Successfully");
        window.localStorage.setItem('key', data.token);
        this.rout.navigate(['/jobinfo']);

      }
      else {
        alert("company record Not Found");
      }
    })

  }


  forgetpass1() {
    this.signIn1 = false;
    this.signIn2 = false;
    this.forgot = true;

  }

  forgetpass2() {
    this.signIn1 = false;
    this.signIn2 = false;
    this.forgot = true;
  }
  
  forgotData() {
    this.srv.forgotPass(this.forgotpass.value).subscribe((data) => {

    })
  }



}
