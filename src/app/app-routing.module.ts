import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { FaqComponent } from './faq/faq.component';
import { HelpComponent } from './help/help.component';
import { HomeComponent } from './home/home.component';
import { ParentComponent } from './parent/parent.component';
import { NgoComponent } from './ngo/ngo.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { NgoLoginComponent } from './ngo-login/ngo-login.component';
import { NgoRegisterComponent } from './ngo-register/ngo-register.component';
import { ChildComponent } from './child/child.component';
import { ChildListComponent } from './child-list/child-list.component';
import { ChildOptionsComponent } from './child-options/child-options.component';
import { NgoRequestListComponent } from './ngo-request-list/ngo-request-list.component';
import { NgoRequestDetailsComponent } from './ngo-request-details/ngo-request-details.component';
import { ParentProfileComponent } from './parent-profile/parent-profile.component';
import { ParentOptionsComponent } from './parent-options/parent-options.component';

import { ChildPreferenceComponent } from './child-preference/child-preference.component';
import { NgoProfileComponent } from './ngo-profile/ngo-profile.component';
import { NgoUpdateComponent } from './ngo-update/ngo-update.component';
import { RemoveComponent } from './remove/remove.component';
import { GalleryComponent } from './gallery/gallery.component';
import { TypoComponent } from './typo/typo.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LogoComponent } from './logo/logo.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ContactComponent } from './contact/contact.component';
import { ParentnotificationComponent } from './parent-notifications/parentnotification.component';


const routes: Routes = [
  {path:'home' , component:HomeComponent},
  {path:'about' , component:AboutComponent},
  {path:'faq' , component:FaqComponent},
  {path:'contact' , component:ContactComponent},
  {path:'help' , component:HelpComponent},
  {path:'parent' , component:ParentComponent},
  {path:'ngo' , component:NgoComponent},
  {path:'login' , component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'profile',component:ProfileComponent},
  {path:'ngologin', component:NgoLoginComponent},
  {path:'ngoregister', component:NgoRegisterComponent},
  {path:'child', component:ChildComponent},
  {path:'childlist', component:ChildListComponent},
  {path:'childoptions', component:ChildOptionsComponent},
  {path:'requestlist', component:NgoRequestListComponent},
  {path:'ngorequestdetails/:req_id', component:NgoRequestDetailsComponent},
  {path:'parentoptions', component:ParentOptionsComponent},
  {path:'parentprofile', component:ParentProfileComponent},
  {path:'parentnotification', component:ParentnotificationComponent},
  {path:'childpreferences', component:ChildPreferenceComponent},
  {path:'ngoprofile', component:NgoProfileComponent},
  {path:'ngoupdate', component:NgoUpdateComponent},
  {path : "remove" , component:RemoveComponent},
  {path : "about" , component:AboutComponent},
  {path : "contact" , component:ContactComponent},
  {path : "faq" , component:FaqComponent},
  {path : "gallery" , component:GalleryComponent},
  {path : "typo" , component:TypoComponent},
  {path : "logo", component:LogoComponent},
  {path : "navbar",component:NavbarComponent},
  {path : "forgot-password",component:ForgotPasswordComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [AboutComponent, ContactComponent, FaqComponent, HelpComponent, HomeComponent, ParentComponent,NgoComponent,LoginComponent,RegisterComponent, NgoLoginComponent, 
  NgoRegisterComponent, ProfileComponent, ChildComponent, ChildListComponent, ChildOptionsComponent, NgoRequestListComponent, NgoRequestDetailsComponent, ParentOptionsComponent,
  ParentProfileComponent, ChildPreferenceComponent, NgoProfileComponent, NgoUpdateComponent,FaqComponent,NavbarComponent,TypoComponent,GalleryComponent,RemoveComponent,ForgotPasswordComponent,LogoComponent,ParentnotificationComponent];