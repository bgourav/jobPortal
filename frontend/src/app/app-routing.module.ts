import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginhomeComponent } from './loginhome/loginhome.component';
import { RegistrationComponent } from './registration/registration.component';
import { VacanciesComponent } from './vacancies/vacancies.component';
import { JobinfoComponent } from './jobinfo/jobinfo.component';
import { VaclistComponent } from './vaclist/vaclist.component';
import { EmplistComponent } from './emplist/emplist.component';
import { ShowinvitationsComponent } from './showinvitations/showinvitations.component';

const routes: Routes = [
  { path:'login',component:LoginhomeComponent},
  { path:'',component:LoginhomeComponent},
  { path:'registration',component:RegistrationComponent},
  { path:'vacancies', component:VacanciesComponent},
  { path:'jobinfo', component:JobinfoComponent},
  { path:'elist', component:EmplistComponent},
  { path:'vlist', component:VaclistComponent},
  { path:'get', component:ShowinvitationsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

