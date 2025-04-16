import { Component } from '@angular/core';
import {MatCard} from "@angular/material/card";
import {MatCheckbox} from "@angular/material/checkbox";
import {MatIcon} from "@angular/material/icon";
import {MatIconButton} from "@angular/material/button";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-todo-card',
  standalone: true,
  imports: [
    MatCard,
    MatCheckbox,
    MatIcon,
    MatIconButton,
    NgClass
  ],
  templateUrl: './todo-card.component.html',
  styleUrl: './todo-card.component.scss'
})
export class TodoCardComponent {

}
