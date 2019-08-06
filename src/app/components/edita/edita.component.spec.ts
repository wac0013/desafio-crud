import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { EditaComponent } from './edita.component';
import { VeiculoService } from 'src/app/services/veiculo.service';
import { ClienteService } from 'src/app/services/cadastro.service';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

describe('Valida Component Lista', () => {
    let componente: EditaComponent;
    let fixture: ComponentFixture<EditaComponent>;
    let de: DebugElement;
    let el: HTMLElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                EditaComponent
            ],
            imports: [ReactiveFormsModule, HttpClientModule],
            providers: [VeiculoService, ClienteService],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        }).compileComponents().then(() => {
            localStorage.clear();

            fixture = TestBed.createComponent(EditaComponent);
            componente = fixture.componentInstance;
            componente.ngOnInit();
            de = fixture.debugElement;
            el = de.nativeElement;
        });
    }));

    afterEach(() => {
        localStorage.clear();
    });

    it('Testa validações CPF', () => {
        componente.formAtribCPF = '';
        expect(componente.formAtribCPF.valid).toBeFalsy();
        componente.formAtribCPF = '00000000000';
        expect(componente.formAtribCPF.valid).toBeFalsy();
        componente.formAtribCPF = '54651';
        expect(componente.formAtribCPF.valid).toBeFalsy();
        componente.formAtribCPF = '546515465654654';
        expect(componente.formAtribCPF.valid).toBeFalsy();
        componente.formAtribCPF = '03323538180';
        expect(componente.formAtribCPF.valid).toBeFalsy();
        componente.formAtribCPF = '03323538188';
        expect(componente.formAtribCPF.valid).toBeTruthy();
    });

    it('Testa validações data', () => {
        componente.formAtribDataNascimento = '';
        expect(componente.formAtribDataNascimento.valid).toBeFalsy();
        componente.formAtribDataNascimento = '30/20/2000';
        expect(componente.formAtribDataNascimento.valid).toBeFalsy();
        componente.formAtribDataNascimento = '11/05/92';
        expect(componente.formAtribDataNascimento.valid).toBeTruthy();
        componente.formAtribDataNascimento = '11/05/1992';
        expect(componente.formAtribDataNascimento.valid).toBeTruthy();
    });

});
