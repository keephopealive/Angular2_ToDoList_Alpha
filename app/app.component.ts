import {Component, Injectable, OnInit} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser'
import {Observable} from 'rxjs/Observable';

@Injectable()
export class SharedService {
  tasksArray: Array<any> = [];
  
  insertTask(task: any){
    this.tasksArray.unshift(task);
  }
  
}


export class TaskService {
  tasks;
  
  constructor(){
    this.tasks = [
      {title:"First Task", created_at: "Date.now()" },
      {title:"Second Task", created_at: "Date.now()" },
      {title:"Third Task", created_at: "Date.now()" },
      {title:"Fourth Task", created_at: "Date.now()" }
    ]
  }
  
  addTask(task){
    this.tasks.push(task);
  } 
  
}

@Component({
  selector: 'new-task',
  template: `
    <div class="row">
      <h3>New Task</h3>
      <form #f="ngForm" (ngSubmit)="onSubmit(f.form)">
        <div class="form-group">
          <label for="title">Title</label> 
          <input
            ngControl="title" 
            #title="ngForm"
            id="title"
            type="text"
            class="form-control"
            required />
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  `,
  providers: [TaskService]
})
export class NewTaskComponent{
  taskService: TaskService;
  
  constructor(
    private _sharedService: SharedService, 
    taskService: TaskService){ }
  
  onSubmit(form){
    // this.taskService.addTask({title: form._value.title, created_at: "Date.now()"})
    this._sharedService.insertTask({title: form._value.title, created_at: "Date.now()"})
  }
  
}



@Component({
  selector: 'tasks',
  template: `
    <div class="row">
      <h3>Tasks List</h3>
      <div class="col-xs-3" *ngFor="#task of tasks">
        {{task.title}}
      </div>
    </div>
  `,
  providers: [TaskService]
})
export class TasksComponent  implements OnInit {
  tasks;
  
  constructor(
    private _sharedService: SharedService, 
    tasksService: TaskService){
      this._sharedService.tasksArray = tasksService.tasks;
    }
    
  ngOnInit():any {
    this.tasks = this._sharedService.tasksArray;
  }
  
}


// Components - Main
@Component({
    selector: 'my-app',
    template: `
      <div class="container">
        <h1>To-Do List</h1>
        <h2>Today's Date: {{ date | date:"MMMM d yyyy" }}</h2>
        <new-task></new-task>
        <tasks></tasks>
      </div>
    `,
    providers: [SharedService],
    directives: [NewTaskComponent, TasksComponent]
})
export class AppComponent {
    date: Date = new Date;
}




bootstrap(AppComponent);