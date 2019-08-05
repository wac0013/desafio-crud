import { ValidatorFn, AbstractControl } from '@angular/forms';
import { validaCPF } from '../utils/validacoes';

export function cpfValidator(): ValidatorFn {
    return (control: AbstractControl): any => {
        return control.value && !validaCPF(control.value) ? { cpfInvalido: true } : null;
    };
}
