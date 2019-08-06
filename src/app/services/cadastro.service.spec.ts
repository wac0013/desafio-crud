import { async, ComponentFixture, TestBed, getTestBed } from '@angular/core/testing';

import { ClienteService } from './cadastro.service';
import { Cliente } from '../models/cliente';
import { Modelo } from '../models/modelo';

describe('Validação do serviço de cliente', () => {

    let servico: ClienteService;
    let injector: TestBed;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ClienteService]
        });

        injector = getTestBed();
        servico = injector.get(ClienteService);
    });

    afterEach(() => {
        localStorage.clear();
    });


    it('Validar salvar novo cliente', (done: DoneFn) => {
        servico.atualizarCliente(new Cliente({
            cpf: '03323538188',
            nome: 'Wellington Alves',
            dataNascimento: new Date(Date.now()),
            endereco: 'Rua teste',
            telefone: '6299999-9999',
            modeloVeiculo: new Modelo({ codigo: '59', nome: 'VW - VolksWagen' })
        }))
            .then(cliente => {
                expect(cliente).not.toBeNull();
                expect(cliente.id).toBe(1);
                done();
            }).catch(e => {
                fail(e);
                done();
            });
    });

    it('Validar atualizar cliente', (done: DoneFn) => {
        let cliente: Cliente = new Cliente({
            id: 1,
            cpf: '03323538188',
            nome: 'Wellington Alves',
            dataNascimento: new Date(Date.now()),
            endereco: 'Rua teste',
            telefone: '6299999-9999',
            modeloVeiculo: new Modelo({ codigo: '59', nome: 'VW - VolksWagen' })
        });

        localStorage.setItem('clientes', JSON.stringify([cliente]));

        let novoCPF = '00000000000';
        cliente.cpf = novoCPF;

        servico.atualizarCliente(cliente)
            .then(c => {
                expect(c).not.toBeNull();
                expect(c.id).toBe(1);
                expect(c.cpf).toBe(novoCPF);
                done();
            }).catch(e => {
                fail(e);
                done();
            });
    });

    it('Validar consulta cliente', () => {
        let cliente: Cliente = new Cliente({
            id: 1,
            cpf: '03323538188',
            nome: 'Wellington Alves',
            dataNascimento: new Date(Date.now()),
            endereco: 'Rua teste',
            telefone: '6299999-9999',
            modeloVeiculo: new Modelo({ codigo: '59', nome: 'VW - VolksWagen' })
        });

        localStorage.setItem('clientes', JSON.stringify([cliente]));

        let clientes = servico.listarClientes();

        expect(clientes.length).toBe(1);
        expect(JSON.stringify(clientes[0])).toEqual(JSON.stringify(cliente));
    });

});
