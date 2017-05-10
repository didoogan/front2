import {SignUpComponent} from "./sign-up/sign-up.component";
import {SignInComponent} from "./sign-in/sign-in.component";


export const routes = [
  { path: '', children: [
    { path: 'signup', component: SignUpComponent },
    { path: 'signin', component: SignInComponent },
  ]},
];