import { Modelo } from './modelo';

export interface ICliente {
    nome: string;
    cpf: string;
    telefone: string;
    dataNascimento: Date;
    endereco: string;
    modeloVeiculo: Modelo;
    id?: number;
}

export class Cliente {
    private _nome: string;
    private _cpf: string;
    private _telefone: string;
    private _dataNascimento: Date;
    private _endereco: string;
    private _id: number;
    private _modeloVeiculo: Modelo;

    constructor(cliente: ICliente) {
        this._nome = cliente.nome;
        this._cpf = cliente.cpf;
        this._telefone = cliente.telefone;
        this._dataNascimento = cliente.dataNascimento;
        this._endereco = cliente.endereco;
        this._id = cliente.id;

        if (typeof cliente.modeloVeiculo == 'string') {
            this._modeloVeiculo = new Modelo(JSON.parse(cliente.modeloVeiculo));
        } else {
            this._modeloVeiculo = cliente.modeloVeiculo;
        }
    }

    public get id(): number {
        return this._id;
    }

    public set id(value: number) {
        this._id = value;
    }

    public get nome(): string {
        return this._nome;
    }

    public set nome(value: string) {
        this._nome = value;
    }

    public get cpf(): string {
        return this._cpf;
    }

    public set cpf(value: string) {
        this._cpf = value;
    }

    public get telefone(): string {
        return this._telefone;
    }

    public set telefone(value: string) {
        this._telefone = value;
    }

    public get dataNascimento(): Date {
        return this._dataNascimento;
    }

    public set dataNascimento(value: Date) {
        this._dataNascimento = value;
    }

    public get endereco(): string {
        return this._endereco;
    }

    public set endereco(value: string) {
        this._endereco = value;
    }

    public get veiculo(): string {
        if (this._modeloVeiculo && this._modeloVeiculo.marca) {
            return `${this._modeloVeiculo.marca.nome} - ${this._modeloVeiculo.nome}`;
        }

        return '';
    }

    public get modeloVeiculo(): Modelo {
        return this._modeloVeiculo;
    }

    /**
     * retornoa uma string em formato JSON com os atributos publicos getter e setter de Cliente
     */
    toJSON(): string {
        return JSON.stringify({
            id: this.id,
            cpf: this.cpf,
            nome: this.nome,
            telefone: this.telefone,
            dataNascimento: this.dataNascimento,
            endereco: this.endereco,
            modeloVeiculo: this.modeloVeiculo ? this.modeloVeiculo.toJson() : ''
        });
    }

}
