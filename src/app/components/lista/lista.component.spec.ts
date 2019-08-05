import { TestBed, async } from '@angular/core/testing';
import { ListaComponent } from './lista.component';

describe('ListaComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                ListaComponent
            ],
        }).compileComponents();
    }));

    it('criou tabela', () => {
        const fixture = TestBed.createComponent(ListaComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    });

    it('should render title in a h1 tag', () => {
        const fixture = TestBed.createComponent(ListaComponent);
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('h1').textContent).toContain('Welcome to desafio-crud!');
    });
});