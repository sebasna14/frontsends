import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateContratoComponent } from './components/create-contrato/create-contrato.component';
import { ListContratosComponent } from './components/list-contratos/list-contratos.component';

const routes: Routes = [
  { path: 'create', component: CreateContratoComponent },
  { path: 'list', component: ListContratosComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
