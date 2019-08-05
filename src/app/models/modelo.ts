import { Marca } from './marca';

interface IModelo {
    codigo: string;
    nome: string;
    marca?: Marca;
}

export class Modelo {
    private _codigo: string;
    private _nome: string;
    private _marca: Marca;

    constructor(modelo: IModelo) {
        this._codigo = modelo.codigo;
        this._nome = modelo.nome;

        if (typeof modelo.marca == 'string') {
            this._marca = new Marca(JSON.parse(modelo.marca));
        } else {
            this._marca = modelo.marca;
        }
    }

    get codigo(): string {
        return this._codigo;
    }

    set codigo(v: string) {
        this._codigo = v;
    }

    get nome(): string {
        return this._nome;
    }

    set nome(v: string) {
        this._nome = v;
    }

    get marca(): Marca {
        return this._marca;
    }

    set marca(v: Marca) {
        this._marca = v;
    }

    toJson(): string {
        return JSON.stringify({
            codigo: this.codigo,
            nome: this.nome,
            marca: this.marca.toJson()
        });
    }
}
