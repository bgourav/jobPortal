import { Component, OnInit } from '@angular/core';
import { PortalserviceService } from '../portalservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emplist',
  templateUrl: './emplist.component.html',
  styleUrls: ['./emplist.component.css']
})
export class EmplistComponent implements OnInit {

  postdetails:Array<any>;

  constructor(private srv: PortalserviceService, private router : Router) { }

  ngOnInit() {

    this.getPosts();
  }

  getPosts()
  {
    console.log("hello")
    this.srv.getseekerPost().subscribe((data)=>{
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
    this.router.navigate(['/jobinfo']);
  }
 
  hire(id){

      this.srv.hireEmploy(id).subscribe((data)=>{
        if(data.status == 200)
        {
          alert("invitation sent");
        }
      })
        
     
  }


}
