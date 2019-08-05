import { Injectable } from '@angular/core';
import { Cliente } from '../models/cliente';

@Injectable({ providedIn: 'root' })
export class ClienteService {
    listarClientes(): Cliente[] {
        let ArrayClientes = JSON.parse(localStorage.getItem('clientes'));
        let clientes: Cliente[] = [];

        if (Array.isArray(ArrayClientes)) {
            ArrayClientes.forEach(c => {
                clientes.push(new Cliente(c));
            });
        }

        return clientes || [];
    }

    limparListaClientes() {
        localStorage.clear();
    }

    private addCliente(cliente: Cliente): Promise<Cliente> {
        return new Promise((sucesso, falha) => {
            let clientes: Cliente[] = this.listarClientes();
            let novoId = 0;

            if (clientes) {
                clientes.forEach((c) => {
                    if (c.id > novoId) {
                        novoId = c.id;
                    }
                });
            } else {
                clientes = [];
            }

            cliente.id = novoId + 1;
            clientes.push(cliente);

            localStorage.setItem('clientes', JSON.stringify(clientes));

            sucesso(cliente);
        });
    }

    atualizarCliente(cliente: Cliente): Promise<Cliente> {
        const self = this;

        return new Promise((sucesso, falha) => {
            if (!cliente.id) {
                self.addCliente(cliente)
                    .then(c => {
                        sucesso();
                    });

                return;
            }

            let clientes: Cliente[] = this.listarClientes();

            let i = clientes.findIndex((c => c.id === cliente.id));

            if (i >= 0) {
                clientes[i] = cliente;
                localStorage.setItem('clientes', JSON.stringify(clientes));
                sucesso();
            } else {
                falha(new Error('Cliente não encontrado, não foi possível atualizá-lo!'));
            }

        });
    }

    removerCliente(cliente: Cliente): Promise<Cliente> {
        const self = this;

        return new Promise((sucesso, falha) => {
            let clientes = self.listarClientes();

            let i = clientes.findIndex((c => c.id === cliente.id));

            if (i >= 0) {
                clientes.splice(i, 1);

                localStorage.setItem('clientes', JSON.stringify(clientes));
                sucesso();
            } else {
                falha(new Error('Cliente não encontrado, não foi possível removelo-lo!'));
            }

        });
    }
}
