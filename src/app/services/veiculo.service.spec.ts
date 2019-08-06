import { async, ComponentFixture, TestBed, getTestBed } from '@angular/core/testing';

import { VeiculoService } from './veiculo.service';
import { HttpClientModule } from '@angular/common/http';
import { Marca } from '../models/marca';

describe('Validação do serviço de veículos', () => {

    let servico: VeiculoService;
    let injector: TestBed;
    let httpMock: HttpClientModule;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule],
            providers: [VeiculoService]
        });

        injector = getTestBed();
        servico = injector.get(VeiculoService);
        httpMock = injector.get(HttpClientModule);
    });


    it('Validar buscar marcas', (done: DoneFn) => {
        servico.listarMarcas().subscribe(marcas => {
            expect(Array.isArray(marcas)).toBeTruthy();
            expect(marcas.length).toBeGreaterThan(10);
            done();
        });
    });

    it('Validar buscar modelos', (done: DoneFn) => {
        servico.listarModelos(new Marca({ codigo: '59', nome: 'VW - VolksWagen' })).subscribe(m => {
            expect(m).not.toBeNull();
            expect(Array.isArray(m)).toBeTruthy();
            expect(m.length).toBeGreaterThan(2);
            done();
        });
    });

});