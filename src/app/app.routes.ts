import { Routes } from '@angular/router';
import {MainLayoutComponent} from "./layout/main-layout/main-layout.component";
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {AboutComponent} from "./pages/about/about.component";

export const routes: Routes = [
  {
    path:'',
    component:MainLayoutComponent,
    children:[
      {path:'', redirectTo:'dashboard', pathMatch: 'full'},
      {path:'dashboard', component:DashboardComponent},
      {path:'about', component:AboutComponent},
    ]
  }
];
