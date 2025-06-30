import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { ClientesFormComponent } from './clientes-form/clientes-form.component';
import { FormsModule } from '@angular/forms';
import { ClienteListComponent } from './cliente-list/cliente-list.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ClientesUpdateComponent } from './clientes-update/clientes-update.component';


@NgModule({
  declarations: [ClientesFormComponent, ClienteListComponent, ClientesUpdateComponent],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    FormsModule,
    NgxPaginationModule
  ],
  exports: [
    ClientesFormComponent
  ]
})
export class ClientesModule { }
