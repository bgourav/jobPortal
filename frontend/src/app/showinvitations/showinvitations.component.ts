import { Component, OnInit } from '@angular/core';
import { PortalserviceService } from '../portalservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-showinvitations',
  templateUrl: './showinvitations.component.html',
  styleUrls: ['./showinvitations.component.css']
})
export class ShowinvitationsComponent implements OnInit {


  data:Array<any>;
  constructor( private srv : PortalserviceService, private router : Router) { }

  ngOnInit() {

    console.log("sjhdfjkdsfhjdd");
    this.getofferdetails();
  }

  getofferdetails()
  {
    this.srv.getinvitationPost().subscribe((data)=>{
      console.log(data);
      this.data=data.data.offers;
    })
  }

  back(){
    this.router.navigate(['/vacancies']);
  }


}
