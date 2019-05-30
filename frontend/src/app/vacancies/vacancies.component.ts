import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PortalserviceService } from '../portalservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vacancies',
  templateUrl: './vacancies.component.html',
  styleUrls: ['./vacancies.component.css']
})
export class VacanciesComponent implements OnInit {


  showform:boolean=true;
  showsearchdata:boolean=false;
  searchdatavalue:any;
  selectedFile:File=null;
  fd=new FormData();


  specForm=this.fb.group({
    name: ['', Validators.required],
    splz: ['', Validators.required],
    exp: ['', Validators.required],
    contact: ['', Validators.required],
    upld: ['', Validators.required]
    
  });
 

  searchdata=this.fb.group({
    "Search" : ['',[Validators.required]],
    
  });
  
  toast: any;
  show: boolean;

  
  constructor(private fb:FormBuilder,private srv: PortalserviceService, private router : Router) { }

  ngOnInit() {
  }


  uploadFile()
  {
    console.log('Registerdata', this.specForm);
    this.fd.append('Resume',this.selectedFile,this.selectedFile.name);
    console.log(this.fd)
    this.srv.sendFile(this.fd).subscribe((data)=>{
      if(data.status == 200)
      {
        console.log(data.filename);
        alert("File uploaded sucessfully. Now make sure that rest of the fields are not null.");
        this.specForm.patchValue({
          upld:data.filename
          
        })
      }
    });
    
  }


  onchangefile(event)
  {
    console.log(event);
    this.selectedFile=<File>event.target.files[0];
      
  }


  vaclist()
  {
    console.log(this.specForm.value);
    this.srv.specxyz(this.specForm.value).subscribe((data)=>{
      if(data.status == 200)
      {
        alert("file uploaded and now vacancies list will be displayed if any...");

      }
      else
      {
        alert("Not valid!, try again.");
      }
    })
  }

  logout()
  {
    this.router.navigate(['login']);
    window.localStorage.clear();
  }

  Search()
  {
    console.log(this.searchdata.value);
    this.srv.search(this.searchdata.value).subscribe((data)=>{
      if(data.status == 200)
      {
        console.log("hello",data)
        this.searchdatavalue=data.data;
        this.showform=false;
        this.showsearchdata=true;
        
      }
      else if(data.status == 404)
      {
        this.toast.errorToaster("Not Found","");
      }
      else
      {
        this.toast.errorToaster("Not Found","");
        
      }
    })
  }

  back()
  {
    this.showform=true;
    this.showsearchdata=false;
  }

  
}
