import { Component } from '@angular/core';
import {MatCard} from "@angular/material/card";
import {MatFormField, MatFormFieldModule, MatLabel} from "@angular/material/form-field";
import {
  MatDatepicker,
  MatDatepickerInput,
  MatDatepickerModule,
  MatDatepickerToggle
} from "@angular/material/datepicker";
import {MatOption, MatSelect} from "@angular/material/select";
import {MatButton} from "@angular/material/button";
import {MatInput, MatInputModule} from "@angular/material/input";

@Component({
  selector: 'app-todo-cereate',
  standalone: true,
  imports: [
    MatCard,
    MatLabel,
    MatFormField,
    MatDatepickerToggle,
    MatDatepicker,
    MatDatepickerInput,
    MatSelect,
    MatOption,
    MatButton, MatFormFieldModule, MatInputModule, MatDatepickerModule,
    MatInput
  ],
  templateUrl: './todo-cereate.component.html',
  styleUrl: './todo-cereate.component.scss'
})
export class TodoCereateComponent {

}
