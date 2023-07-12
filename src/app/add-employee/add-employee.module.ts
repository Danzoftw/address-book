import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { AddEmployeeComponent } from './add-employee.component';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        InputTextModule,
        FormsModule,
        InputTextareaModule,
        ButtonModule,
        CommonModule
    ],
    declarations: [AddEmployeeComponent],
    exports: [AddEmployeeComponent],
})

export class AddEmployeeModule {}
