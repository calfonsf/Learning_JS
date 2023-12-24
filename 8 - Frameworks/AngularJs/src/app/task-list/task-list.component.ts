import { ArrayType } from '@angular/compiler';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})

export class TaskListComponent {
  @Input() tasklist: {name: string, id: number}[] = [{name: '', id: 0}]
}
