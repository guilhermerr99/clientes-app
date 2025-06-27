import { Component, OnInit } from '@angular/core';
import { Cliente } from '../model/cliente';
import { ClientesService } from 'src/app/clientes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css']
})
export class ClienteListComponent implements OnInit {

  clientes: Cliente[] = [];
  paginaAtual: number = 1;
  deleted: boolean = false;

  constructor(private service: ClientesService) { }

  ngOnInit(): void {
    this.listarClientes();
  }

  listarClientes(){
    this.service.listarClientes()
      .subscribe(response => {
        this.clientes = response;
        console.log(this.clientes)
      });
  }
  // deletar(id: number){
  //   this.service.deletar(id)
  //     .subscribe(response => {
  //       this.listarClientes();
  //       this.deleted = true;
  //     })
  // }

  excluirCliente(id: number): void {
  Swal.fire({
    title: 'Tem certeza?',
    text: 'Você não poderá desfazer isso!',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#d33',
    cancelButtonColor: '#3085d6',
    confirmButtonText: 'Sim, excluir',
    cancelButtonText: 'Cancelar'
  }).then((result) => {
    if (result.isConfirmed) {
      this.service.deletar(id).subscribe({
        next: () => {
          this.clientes = this.clientes.filter(c => c.id !== id);
          Swal.fire('Excluído!', 'O cliente foi removido.', 'success');
        },
        error: err => {
          Swal.fire('Erro!', 'Ocorreu um erro ao excluir.', 'error');
          console.error(err);
        }
      });
    }
  });
}

}
