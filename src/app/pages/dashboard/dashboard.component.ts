import { Component } from '@angular/core';
import {FilterBarComponent} from "../../components/filter-bar/filter-bar.component";
import {TodoListComponent} from "../../components/todo-list/todo-list.component";
import {TodoCereateComponent} from "../../components/todo-cereate/todo-cereate.component";
import {MatIcon} from "@angular/material/icon";


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    FilterBarComponent,
    TodoListComponent,
    TodoCereateComponent,
    MatIcon

  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
