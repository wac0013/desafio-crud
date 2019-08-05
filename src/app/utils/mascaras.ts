


export function mascaraTelefone(tel: string): string {
    tel = tel.replace(/\D/g, '');
    tel = tel.replace(/^(\d)/, '($1');
    tel = tel.replace(/(.{3})(\d)/, '$1)$2');

    if (tel.length === 9) {
        tel = tel.replace(/(.{1})$/, '-$1');
    } else if (tel.length === 10) {
        tel = tel.replace(/(.{2})$/, '-$1');
    } else if (tel.length === 11) {
        tel = tel.replace(/(.{3})$/, '-$1');
    } else if (tel.length === 12) {
        tel = tel.replace(/(.{4})$/, '-$1');
    } else if (tel.length > 12) {
        tel = tel.replace(/(.{4})$/, '-$1');
    }
    return tel;
}

export function mascaraCPF(cpf: string): string {
    cpf = cpf.replace(/\D/g, '');
    cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
    cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, '$1-$2');

    return cpf;
}

export function mascaraData(data: string): string {
    data = data.replace(/\D/g, '');
    data = data.replace(/(\d{2})(\d)/, '$1/$2');
    data = data.replace(/(\d{2})(\d)/, '$1/$2');

    return data;
}
