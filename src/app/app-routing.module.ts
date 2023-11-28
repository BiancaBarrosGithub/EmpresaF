import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpresaModule } from './empresa/empresa.module';

const routes: Routes = [
  {path:'', pathMatch: 'full', redirectTo:''},
  {path:'empresa', loadChildren:()=> EmpresaModule }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
