import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortalserviceService } from './portalservice.service';
import { LoginhomeComponent } from './loginhome/loginhome.component';
import { RegistrationComponent } from './registration/registration.component';
import { EmplistComponent } from './emplist/emplist.component';
import { JobinfoComponent } from './jobinfo/jobinfo.component';
import { ShowapplicantsComponent } from './showapplicants/showapplicants.component';
import { ShowinvitationsComponent } from './showinvitations/showinvitations.component';
import { VacanciesComponent } from './vacancies/vacancies.component';
import { VaclistComponent } from './vaclist/vaclist.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {FileUploadModule} from 'primeng/fileupload';
import { from } from 'rxjs';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginhomeComponent,
    EmplistComponent,
    JobinfoComponent,
    ShowapplicantsComponent,
    ShowinvitationsComponent,
    VacanciesComponent,
    VaclistComponent,
    RegistrationComponent,
    ForgotPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule,
    HttpClientModule,
    GooglePlaceModule,
    FileUploadModule
  ],
  providers: [PortalserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }


