import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { DrivenFormComponent } from './driven-form/driven-form.component';
import { FormComponent } from './form/form.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { OffresEmploiComponent } from './offres-emploi/offres-emploi.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {path:'', redirectTo:'products',pathMatch:'full'},
  {path:'products', component:ProductComponent},
  {path:'product/:id', component:DetailProductComponent},
  {path:'offres',component:OffresEmploiComponent},
  {path:'AddProduct',component:FormComponent},
  {path:'Formulaire',component:DrivenFormComponent},
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
