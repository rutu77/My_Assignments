export class Task {
  constructor(
    public id: number,
    public name: string,
    public status: 'Pending' | 'In Progress' | 'Completed',
    public priority: 'Low' | 'Medium' | 'High'
  ) {}
}

export class TaskModel {
}

