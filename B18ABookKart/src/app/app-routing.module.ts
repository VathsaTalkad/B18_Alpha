import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookdetailsComponent } from './bookdetails/bookdetails.component';
import { ProdDescComponent } from './ProductDescription/prod-desc/prod-desc.component';

const routes: Routes = [
  {
    path:'', component: BookdetailsComponent
  },
  {
    path:'ibook/:id', component: ProdDescComponent
  },
  {
    path:'allbooks', component: BookdetailsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
