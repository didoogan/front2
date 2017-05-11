import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import {routes} from "./routes";
import {RouterModule} from "@angular/router";
import {UserComponent} from "./user.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SignInComponent, SignUpComponent, UserComponent]
})
export class UserModule { }
