import { Component, OnInit } from '@angular/core';
import { Cliente } from '../model/cliente';
import { ClientesService } from 'src/app/clientes.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-clientes-update',
  templateUrl: './clientes-update.component.html',
  styleUrls: ['./clientes-update.component.css']
})
export class ClientesUpdateComponent implements OnInit {

  cliente: Cliente;
  success: Boolean = false;
  errors: String[];

  constructor(private service: ClientesService, private route: ActivatedRoute) {
    this.cliente = new Cliente();
    this.errors = [];
  }

  ngOnInit(): void {
    this.cliente.id = +this.route.snapshot.paramMap.get('id')!;
    this.getCliente();
  }
  getCliente() {
    this.service
      .getClienteById(this.cliente.id)
      .subscribe(response => {
        this.cliente = response;
        console.log(this.cliente);
      });
  }

  // Método para atualizar o cliente
  atualizarCliente() {
    this.service
      .atualizarCliente(this.cliente.id, this.cliente)
      .subscribe(response => {
        this.success = true;
        this.errors = null;
        this.cliente = response;
      }, errorResponse => {
        this.success = false;
        this.errors = errorResponse.error.errors;
      });
  }

  onSubmit() {
    this.service
      .salvar(this.cliente)
      .subscribe(response => {
        this.success = true;
        this.errors = null;
        this.cliente = response;
      }, errorResponse => {
        this.success = false;
        this.errors = errorResponse.error.errors;
      }
      )
  }
}
