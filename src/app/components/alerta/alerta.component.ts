import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

declare var $: any;

@Component({
    selector: 'dc-alerta',
    templateUrl: 'alerta.component.html'
})
export class AlertaComponent implements OnInit {
    @Input()
    podeFechar = true;

    @Input()
    mensagem: string;

    @Input()
    tipo: string;

    @Input()
    titulo: string;

    @Output()
    fechar = new EventEmitter();

    constructor() {
    }

    ngOnInit() {
        const self = this;

        $('#alerta').on('closed.bs.alert', () => {
            self.fechar.emit(null);
        });
    }
}
