import { Component, OnInit } from '@angular/core';
import { ContratoService } from '../../services/contrato.service';
import { Contrato } from '../../models/contrato';

@Component({
  selector: 'app-list-contratos',
  templateUrl: './list-contratos.component.html',
})
export class ListContratosComponent implements OnInit {
  contratos: Contrato[] = [];

  constructor(private contratoService: ContratoService) {}

  ngOnInit(): void {
    this.loadContratos();
  }

  loadContratos(): void {
    this.contratoService.getContratos().subscribe((data) => {
      this.contratos = data;
    });
  }

  deleteContrato(id: number): void {
    if (confirm('¿Está seguro de eliminar este contrato?')) {
      this.contratoService.deleteContrato(id).subscribe(() => {
        this.loadContratos();
      });
    }
  }
}
