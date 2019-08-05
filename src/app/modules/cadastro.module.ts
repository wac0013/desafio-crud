import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// Services
import { ClienteService } from '../services/cadastro.service';
// Components
import { ListaComponent } from '../components/lista/lista.component';
import { EditaComponent } from '../components/edita/edita.component';
import { ConfirmacaoModalComponent } from '../components/confirmacaoModal/confirmacaoModal.component';
import { AlertaComponent } from '../components/alerta/alerta.component';

@NgModule({
    declarations: [
        ListaComponent,
        EditaComponent,
        ConfirmacaoModalComponent,
        AlertaComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
    providers: [
        ClienteService
    ],
    exports: [ListaComponent]
})
export class CadastroModule { }
