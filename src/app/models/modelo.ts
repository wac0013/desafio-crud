import { Marca } from './marca';

interface IModelo {
    codigo: string;
    nome: string;
    marca?: Marca;
}

export class Modelo {
    codigo: string;
    nome: string;
    marca: Marca;

    constructor(modelo: IModelo) {
        this.codigo = modelo.codigo;
        this.nome = modelo.nome;
        this.marca = modelo.marca;

    }

}
