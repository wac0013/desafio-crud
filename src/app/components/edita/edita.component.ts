import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cadastro.service';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl } from '@angular/forms';
import { cpfValidator } from 'src/app/directives/cpfValidator.directive';
import { VeiculoService } from 'src/app/services/veiculo.service';
import { mascaraTelefone, mascaraCPF, mascaraData } from 'src/app/utils/mascaras';
import { dataValidator } from 'src/app/directives/dataValidator.directive';
import { Marca } from 'src/app/models/marca';
import { Modelo } from 'src/app/models/modelo';

@Component({
    selector: 'dc-edita',
    templateUrl: 'edita.component.html',
    styleUrls: ['edita.component.scss']
})
export class EditaComponent implements OnInit {
    form: FormGroup;
    processando = false;
    opcoesMarcas: Marca[] = [];
    opcoesModelos: Modelo[] = [];
    podeEditar = false;
    podeExcluir = false;

    @Input()
    cliente: Cliente;

    @Input()
    modoEdicao: boolean;

    @Output()
    retornoCadastro = new EventEmitter();

    @Output()
    excluir = new EventEmitter();

    constructor(private fb: FormBuilder, private clienteService: ClienteService, private veiculoService: VeiculoService) {
        this.form = fb.group({
            nome: ['', Validators.required],
            cpf: ['', [Validators.required, cpfValidator()]],
            telefone: ['', [Validators.required, Validators.minLength(13)]],
            dataNascimento: ['', [Validators.required, dataValidator()]],
            marca: ['', Validators.required],
            modelo: ['', Validators.required],
            endereco: ['', Validators.required]
        });
    }

    ngOnInit() {
        const self = this;

        self.processando = false;

        if (self.cliente) {
            self.podeEditar = true;
            self.podeExcluir = true;
        } else {
            self.cliente = new Cliente({
                nome: '', cpf: '', dataNascimento: undefined, endereco: '', telefone: '', modeloVeiculo: undefined
            });
            self.modoEdicao = true;
        }

        self.formAtribNome = self.cliente.nome;
        self.formAtribCPF = self.cliente.cpf;
        self.formAtribTelefone = self.cliente.telefone;
        self.formAtribDataNascimento = self.cliente.dataNascimento || '';
        self.formAtribEndereco = self.cliente.endereco;
        self.formAtribMarca = self.cliente.modeloVeiculo;
        self.formAtribModelo = self.cliente.modeloVeiculo ? self.cliente.modeloVeiculo.marca : null;

        self.veiculoService.listarMarcas().subscribe(
            dados => {
                self.opcoesMarcas = dados;
                self.formAtribMarca = self.cliente.modeloVeiculo;
                self.formAtribModelo = self.cliente.modeloVeiculo ? self.cliente.modeloVeiculo.marca : null;
            },
            erro => {

            }
        );
    }

    salvarCliente() {
        const self = this;

        self.processando = true;

        let cliente = new Cliente({
            nome: self.formAtribNome.value,
            cpf: self.formAtribCPF.value,
            dataNascimento: self.formAtribDataNascimento.value,
            endereco: self.formAtribEndereco.value,
            telefone: self.formAtribTelefone.value,
            modeloVeiculo: self.formAtribModelo.value
        });

        if (self.cliente && self.cliente.id) {
            cliente.id = self.cliente.id;
        }

        if (!self.form.valid) {
            return;
        }

        self.clienteService.atualizarCliente(cliente)
            .then(c => {
                self.processando = false;
                self.retornoCadastro.emit(null);
            })
            .catch(e => {
                self.processando = false;
            });
    }

    editarCliente() {
        this.modoEdicao = true;
        // this.podeEditar = false;
    }

    excluirCliente() {
        const self = this;
        self.processando = true;

        self.excluir.emit();
    }

    selecionaMarca() {
        const self = this;

        self.veiculoService.listarModelos(self.formAtribMarca.value).subscribe(
            dados => {
                self.opcoesModelos = dados;
            },
            erro => {

            }
        );
    }

    mascaraTelefone() {
        this.formAtribTelefone = mascaraTelefone(this.formAtribTelefone.value);
    }

    mascaraCPF() {
        this.formAtribCPF = mascaraCPF(this.formAtribCPF.value);
    }

    mascaraData() {
        this.formAtribDataNascimento = mascaraData(this.formAtribDataNascimento.value);
    }

    get formAtribNome() {
        return this.form.get('nome');
    }

    set formAtribNome(v: any) {
        this.form.get('nome').setValue(v);
    }

    get formAtribCPF() {
        return this.form.get('cpf');
    }

    set formAtribCPF(v: any) {
        this.form.get('cpf').setValue(v);
    }

    get formAtribEndereco() {
        return this.form.get('endereco');
    }

    set formAtribEndereco(v: any) {
        this.form.get('endereco').setValue(v);
    }

    get formAtribTelefone() {
        return this.form.get('telefone');
    }

    set formAtribTelefone(v: any) {
        this.form.get('telefone').setValue(v);
    }

    get formAtribMarca() {
        return this.form.get('marca');
    }

    set formAtribMarca(v: any) {
        this.form.get('marca').setValue(v);
    }

    get formAtribModelo() {
        return this.form.get('modelo');
    }

    set formAtribModelo(v: any) {
        this.form.get('modelo').setValue(v);
    }

    get formAtribDataNascimento() {
        return this.form.get('dataNascimento');
    }

    set formAtribDataNascimento(v: any) {
        this.form.get('dataNascimento').setValue(v);
    }

}
