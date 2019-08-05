import { Component, Input } from '@angular/core';

@Component({
    selector: 'dc-alerta',
    templateUrl: 'alerta.component.html'
})
export class AlertaComponent {
    @Input()
    podeFechar = true;

    @Input()
    mensagem: string;

    @Input()
    tipo: string;

    @Input()
    titulo: string;

    constructor() {
    }
}
