import { Injectable } from '@angular/core';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks: Task[] = [
    new Task(1, 'Desktop Support', 'Pending', 'High'), new Task(2, "Task A","Pending","Low"), new Task(3,"Task B","Pending","Medium")];

  getTasks() {
    return this.tasks;
  }

  addTask(name: string, priority: 'Low' | 'Medium' | 'High') {
    const newTask = new Task(this.tasks.length + 1, name, 'Pending', priority);
    this.tasks.push(newTask);
  }

  updateTaskStatus(id: number, newStatus: 'Pending' | 'In Progress' | 'Completed') {
    const task = this.tasks.find(t => t.id === id);
    if (task) task.status = newStatus;
  }

  deleteTask(id: number) {
    this.tasks = this.tasks.filter(t => t.id !== id);
  }
}

