import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Marca } from '../models/marca';
import { Modelo } from '../models/modelo';

@Injectable({ providedIn: 'root' })
export class VeiculoService {
    private urlMarcas = 'https://parallelum.com.br/fipe/api/v1/carros/marcas';

    constructor(private http: HttpClient) {

    }

    listarMarcas(): Observable<any> {
        const self = this;

        return self.http.get(self.urlMarcas, {}).pipe(
            map(m => {
                let marcas: Marca[] = [];

                if (Array.isArray(m)) {
                    m.forEach(marca => {
                        marcas.push(new Marca({ codigo: marca.codigo, nome: marca.nome }));
                    });

                    return marcas;
                }
                return null;
            })
        );
    }

    listarModelos(marca: Marca): Observable<any> {
        const urlModelos = `https://parallelum.com.br/fipe/api/v1/carros/marcas/${marca.codigo}/modelos`;
        const self = this;

        return self.http.get<any>(urlModelos).pipe(
            map(m => {
                let modelos: Modelo[] = [];

                if (m && m.modelos && Array.isArray(m.modelos)) {
                    m.modelos.forEach(modelo => {
                        modelos.push(new Modelo({ codigo: modelo.codigo, nome: modelo.nome, marca }));
                    });

                    return modelos;
                }
                return null;
            })
        );
    }
}
