import { Component, OnInit } from '@angular/core';
import { PortalserviceService } from '../portalservice.service';

@Component({
  selector: 'app-showapplicants',
  templateUrl: './showapplicants.component.html',
  styleUrls: ['./showapplicants.component.css']
})
export class ShowapplicantsComponent implements OnInit {

  constructor( private srv : PortalserviceService) { }

  ngOnInit() {

    // console.log("sjhdfjkdsfhjdd");
    // this.getofferdetails();
  }

  // getofferdetails()
  // {
  //   this.srv.getinvitationPost().subscribe((data)=>{
  //     console.log(data);
  //   })
  // }


}
