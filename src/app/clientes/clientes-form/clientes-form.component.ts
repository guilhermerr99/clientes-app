import { Component, OnInit } from '@angular/core';
import { Cliente } from '../model/cliente';
import { ClientesService } from 'src/app/clientes.service';

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css']
})
export class ClientesFormComponent implements OnInit {

  cliente: Cliente;
  success: Boolean = false;
  errors: String[];
  dataFormatada: Date;
  
  constructor(private service: ClientesService) {
    this.cliente = new Cliente();
  }

  ngOnInit(): void {
    // this.cliente = this.service.salvar();
    // console.log("ao iniciar", this.cliente);
  }

  onSubmit(){
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
