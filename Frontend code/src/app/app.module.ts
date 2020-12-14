import { BrowserModule } from '@angular/platform-browser';
import { Component, NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { RouterModule,Routes}  from '@angular/router';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { PropertyCardComponent } from './property/property-card/property-card.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {HousingserviceService}  from './services/housingservice.service';
import { PropertyAddComponent } from './property/property-add/property-add.component';
import { PropertyDetailsComponent } from './property/property-details/property-details.component';
import { RegisterComponent } from './user/register/register.component';
import { LoginComponent } from './user/login/login.component'

const appRoutes:Routes=[
  {path:'home' ,component:PropertyListComponent},
  {path:'rent-property',component:PropertyListComponent},
  {path:'add-property',component:PropertyAddComponent},
  {path:'property-details/:id',component:PropertyDetailsComponent},
  {path:'user-login',component:LoginComponent},
  {path:'user-register',component:RegisterComponent},
  {path:'' ,component:PropertyListComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    PropertyCardComponent,
    PropertyListComponent,
    NavBarComponent,
    PropertyAddComponent,
    PropertyDetailsComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,FormsModule,ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [HousingserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
