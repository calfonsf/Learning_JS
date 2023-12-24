import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TaskListComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
 
  newtask = ''
  tasks: {name: string, id: number}[] = []


  handleSubmit(){

    if (this.newtask){
        let index = this.tasks.length
        const newtask =  {name: this.newtask , id: index}
        this.tasks.push(newtask)
    }
    else{
      console.log('Empty Task')
    }
  }
}
