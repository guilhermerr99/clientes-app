import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './template/home/home.component';
import { ClientesFormComponent } from './clientes/clientes-form/clientes-form.component';
import { ClienteListComponent } from './clientes/cliente-list/cliente-list.component';


const routes: Routes = [
  {path : 'home', component: HomeComponent},
  {path : 'clientes-form', component: ClientesFormComponent},
  {path : 'clientes-list', component: ClienteListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
