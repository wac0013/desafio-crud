import { Component, OnInit, NgZone } from '@angular/core';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cadastro.service';

declare var $: any;

@Component({
    selector: 'dc-lista',
    templateUrl: 'lista.component.html',
    styleUrls: ['lista.component.scss']
})
export class ListaComponent implements OnInit {
    clientes: Cliente[];
    colunasTabela: string[];
    atributosCliente: string[];
    paginaAtual: number;
    cadastro = false;
    edita = false;
    clienteSelecionado: Cliente;
    sucessoExclusao: boolean;
    excluir = false;

    constructor(private clienteService: ClienteService, private zone: NgZone) {
        const self = this;
        self.clientes = [];
        self.cadastro = false;
    }

    ngOnInit() {
        const self = this;

        $('#modalEditor').on('hidden.bs.modal', () => {
            self.zone.run(() => self.cadastro = false);
        });

        self.colunasTabela = ['#', 'CPF', 'Nome', 'Veiculo', 'Ações'];
        self.atributosCliente = ['id', 'cpf', 'nome', 'veiculo'];
        self.paginaAtual = 1;
        self.atualizarLista();
    }

    get totalPaginas(): number {
        return this.clientes ? Math.ceil(this.clientes.length / 2) || 1 : 1;
    }

    atualizarLista() {
        this.clientes = this.clienteService.listarClientes();
    }

    fecharCadastro() {
        $('#modalEditor').modal('hide');
        this.cadastro = false;
        this.atualizarLista();
    }

    addCliente() {
        this.edita = true;
        this.cadastro = true;
        this.clienteSelecionado = null;
    }

    visualizarCliente(e) {
        $('#modalEditor').modal('show');
        this.clienteSelecionado = e;
        this.edita = false;
        this.cadastro = true;
    }

    editarCliente(e) {
        $('#modalEditor').modal('show');
        this.clienteSelecionado = e;
        this.edita = true;
        this.cadastro = true;
    }

    excluirCliente() {
        const self = this;

        self.excluir = false;

        self.clienteService.removerCliente(self.clienteSelecionado)
            .then(c => {
                self.atualizarLista();
            })
            .catch();
    }

    selecionaClienteExcluir(e) {
        this.clienteSelecionado = e;
        this.excluir = true;
    }
}
