import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

declare var $: any;

@Component({
    selector: 'dc-confirmacao-modal',
    templateUrl: 'confirmacaoModal.component.html'
})
export class ConfirmacaoModalComponent implements OnInit {

    @Input()
    titulo: string;

    @Input()
    mensagem: string;

    @Output()
    ok = new EventEmitter();

    @Output()
    cancela = new EventEmitter();

    @Output()
    exit = new EventEmitter();

    constructor() {

    }

    ngOnInit() {
        const self = this;

        $('#confirmacaoModal').modal('show');
        $('#confirmacaoModal').on('hidden.bs.modal', () => {
            self.exit.emit();
        });
    }

    responder(resposta: boolean) {
        $('#confirmacaoModal').modal('hide');

        if (resposta) {
            this.ok.emit();
        } else {
            this.cancela.emit();
        }
    }
}
