import { Modelo } from './modelo';

interface IMarca {
    nome: string;
    codigo: string;
    modelos?: Modelo[];
}

export class Marca {
    private _nome: string;
    private _codigo: string;
    private _modelos: Modelo[];

    constructor(marca: IMarca) {
        this._codigo = marca.codigo;
        this._nome = marca.nome;
        this._modelos = marca.modelos;
    }

    get nome(): string {
        return this._nome;
    }

    set nome(v: string) {
        this._nome = v;
    }

    get codigo(): string {
        return this._codigo;
    }

    set codigo(v: string) {
        this._codigo = v;
    }

    get modelos(): Modelo[] {
        return this._modelos;
    }

    set modelos(v: Modelo[]) {
        this._modelos = v;
    }

    toJson(): string {
        return JSON.stringify({
            codigo: this.codigo,
            nome: this.nome
        });
    }
}
