import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component'
import { EntregasComponent } from './pages/entregas/entregas.component'
import { EstabelecimentoComponent } from './pages/estabelecimento/estabelecimento.component'

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },{
    path: "entregas",
    component: EntregasComponent
  },{
    path: "estabelecimento",
    component: EstabelecimentoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
