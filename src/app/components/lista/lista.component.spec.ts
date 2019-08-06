import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { ListaComponent } from './lista.component';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('Valida Component Lista', () => {
    let componente: ListaComponent;
    let fixture: ComponentFixture<ListaComponent>;
    let de: DebugElement;
    let el: HTMLElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                ListaComponent
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        }).compileComponents().then(() => {
            localStorage.clear();

            fixture = TestBed.createComponent(ListaComponent);
            componente = fixture.componentInstance;
            de = fixture.debugElement;
            el = de.nativeElement;
        });
    }));

    afterEach(() => {
        localStorage.clear();
    });

    it('criou header', () => {
        let header = de.queryAll(By.css('header'));
        expect(header).toBeTruthy();
    });

    it('criou main', () => {
        let main = de.queryAll(By.css('main'));
        expect(main).toBeTruthy();
    });

    it('criou footer', () => {
        let footer = de.queryAll(By.css('footer'));
        expect(footer).toBeTruthy();
    });

    it('criou tabela', () => {
        expect(componente).toBeTruthy();
    });

    it('criou botão adicionar', () => {
        let botao = de.query(By.css('.circular-btn'));
        expect(botao).toBeTruthy();
    });

});
