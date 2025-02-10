import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './task-list/task-list.component';
import { ExampleComponent } from '../example_component/example.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [TaskListComponent, ExampleComponent],
  imports: [CommonModule, SharedModule],
  exports: [TaskListComponent, ExampleComponent],
})
export class TaskModule {}
