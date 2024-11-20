import { Component } from '@angular/core';
import { ContratoService } from '../../services/contrato.service';
import { Contrato } from '../../models/contrato';

@Component({
  selector: 'app-create-contrato',
  templateUrl: './create-contrato.component.html',
})
export class CreateContratoComponent {
  contrato: Contrato = new Contrato();

  constructor(private contratoService: ContratoService) {}

  saveContrato(): void {
    this.contratoService.createContrato(this.contrato).subscribe(() => {
      alert('Contrato creado con éxito');
      this.contrato = new Contrato();
    });
  }
}
