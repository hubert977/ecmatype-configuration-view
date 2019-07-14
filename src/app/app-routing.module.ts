import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstPageConfigComponent } from './first-page-config/first-page-config.component';
import { SecondPageConfigComponent } from './second-page-config/second-page-config.component';


const routes: Routes = [
  {path: "",component:FirstPageConfigComponent},
  {path: "second-page", component: SecondPageConfigComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
