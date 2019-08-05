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
    nome: string;
    cpf: string;
    telefone: string;
    dataNascimento: Date;
    endereco: string;
    id: number;
    modeloVeiculo: Modelo;

    constructor(cliente: ICliente) {
        this.nome = cliente.nome;
        this.cpf = cliente.cpf;
        this.telefone = cliente.telefone;
        this.dataNascimento = cliente.dataNascimento;
        this.endereco = cliente.endereco;
        this.id = cliente.id;
        this.modeloVeiculo = cliente.modeloVeiculo;

    }

    public get veiculo(): string {
        if (this.modeloVeiculo && this.modeloVeiculo.marca) {
            return `${this.modeloVeiculo.marca.nome} - ${this.modeloVeiculo.nome}`;
        }

        return '';
    }

}
