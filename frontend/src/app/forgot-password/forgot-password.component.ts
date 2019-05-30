import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PortalserviceService } from '../portalservice.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {


  token:any;

  forgotpass = this.fb.group({
    password: ['', [Validators.required]],
    confirmpassword: ['', [Validators.required]]
  })
  constructor(private fb: FormBuilder,
    private srv: PortalserviceService,
    private rout: ActivatedRoute) { }

  ngOnInit() {
    this.rout.queryParams.subscribe(params => {
      console.log("params",params)
      this.token = params['token']; 
      console.log("Tokn", this.token);

    });
 
  }


  forgotData() {
    if (this.forgotpass.value.password != this.forgotpass.value.confirmpassword) {
    }
    else {
      console.log(this.forgotpass.value.password,this.token);
      this.srv.resetPass({"password":this.forgotpass.value.password},this.token).subscribe((data)=>{
        console.log(data);
      });
    }
  }

  
}
