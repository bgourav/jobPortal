import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PortalserviceService } from '../portalservice.service'; 

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {


  tab1:boolean=true;
  tab2:boolean=false;

  sregistrationForm=this.fb.group({
    fname: ['', Validators.required],
    lname: ['', Validators.required],
    username: ['', Validators.required],
    psw: ['', Validators.required],
    email: ['', Validators.required],
    contact: ['', Validators.required],
    gender: ['', Validators.required]
 
  });

  pregistrationForm=this.fb.group({
    cname: ['', Validators.required],
    username: ['', Validators.required],
    psw: ['', Validators.required],
    ctype: ['', Validators.required],
    email: ['', Validators.required],
    contact: ['', Validators.required]
    
  });

  constructor(private fb:FormBuilder,private srv: PortalserviceService) { }

  ngOnInit() {
  }

  sregister()
  {
    console.log(this.sregistrationForm.value);
    this.srv.suserxyz(this.sregistrationForm.value).subscribe((data)=>{
      if(data.status == 200)
      {
        alert("Successfully registered");

      }
      else
      {
        alert("Not valid!, try again.");
      }
    })
    
  }

  pregister()
  {
    console.log(this.pregistrationForm.value);
    this.srv.puserxyz(this.pregistrationForm.value).subscribe((data)=>{
      if(data.status == 200)
      {
        alert("Successfully registered");

      }
      else
      {
        alert("Not valid!, try again.");
      }
    })
    
  }

hire()
{
  this.tab1=false;
  this.tab2=true;
}

emp()
{
  this.tab1=true;
  this.tab2=false;
}

}

  
