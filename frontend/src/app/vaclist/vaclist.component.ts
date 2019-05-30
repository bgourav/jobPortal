import { Component, OnInit } from '@angular/core';
import { PortalserviceService } from '../portalservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vaclist',
  templateUrl: './vaclist.component.html',
  styleUrls: ['./vaclist.component.css']
})
export class VaclistComponent implements OnInit {

  postdetails:Array<any>;

  constructor(private srv: PortalserviceService, private router : Router) { }

  ngOnInit() {

    this.getPosts();
  }

  getPosts()
  {
    console.log("hello")
    this.srv.getproviderPost().subscribe((data)=>{
      if(data.status == 200)
      {
        this.postdetails=data.data;
        console.log(data.data);

      }
      else if(data.status == 403)
      {
        this.router.navigate(['login']);
      }
  
    })
  }

  back(){
    this.router.navigate(['/vacancies']);
  }

  apply(){
    alert("Your application is successfully recorded for the given post. Company will called you shortly once they need you or find you the best. Thanks for applying. Good luck !");

  }


}

