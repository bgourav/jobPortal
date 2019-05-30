import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';
import { PortalserviceService } from '../portalservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jobinfo',
  templateUrl: './jobinfo.component.html',
  styleUrls: ['./jobinfo.component.css']
})
export class JobinfoComponent implements OnInit {

  @ViewChild("placesRef") placesRef : GooglePlaceDirective;

  jobinfoForm=this.fb.group({
    cname: ['', Validators.required],
    jtitle: ['', Validators.required],
    adrs: ['', Validators.required],
    jsmry: ['', Validators.required],
    exp: ['', Validators.required]
    
  });

  constructor(private fb:FormBuilder,private srv: PortalserviceService, private router : Router) { }

  ngOnInit() {
  }

  addjobinfo()
  {

    console.log(this.jobinfoForm.value);
    this.srv.jinfoxyz(this.jobinfoForm.value).subscribe((data)=>{
      if(data.status == 200)
      {
        alert("job description recorded");
      }
      else
      {
        alert("Ooops... something went wrong. Try again !");
      }
    })
    
  }
 
  handleAddressChange(event)
  {

    console.log(event.geometry.location.lat());
      this.jobinfoForm.patchValue({
      adrs:event.formatted_address,
       
           })
    
  }

  logout()
  {
    this.router.navigate(['login']);
    window.localStorage.clear();
  }
  
  selectagain()
  {
    this.router.navigate(['login']);
    window.localStorage.clear();
    alert("Please login again.");
  }

}
