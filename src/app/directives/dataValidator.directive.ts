import { ValidatorFn, AbstractControl } from '@angular/forms';
import * as moment from 'moment';

export function dataValidator(formato?: string): ValidatorFn {
    return (control: AbstractControl): any => {
        formato = formato || 'DD/MM/YYYY';
        return control.value && !moment(control.value, formato).isValid() ? { dataInvalida: true } : null;
    };
}
