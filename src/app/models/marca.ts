import { Modelo } from './modelo';

interface IMarca {
    nome: string;
    codigo: string;
    modelos?: Modelo[];
}

export class Marca {
    nome: string;
    codigo: string;
    modelos: Modelo[];

    constructor(marca: IMarca) {
        this.codigo = marca.codigo;
        this.nome = marca.nome;
        this.modelos = marca.modelos;
    }

}
