System.register(['angular2/core', 'angular2/platform/browser'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, browser_1;
    var SharedService, TaskService, NewTaskComponent, TasksComponent, AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            }],
        execute: function() {
            SharedService = (function () {
                function SharedService() {
                    this.tasksArray = [];
                }
                SharedService.prototype.insertTask = function (task) {
                    this.tasksArray.unshift(task);
                };
                SharedService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], SharedService);
                return SharedService;
            }());
            exports_1("SharedService", SharedService);
            TaskService = (function () {
                function TaskService() {
                    this.tasks = [
                        { title: "First Task", created_at: "Date.now()" },
                        { title: "Second Task", created_at: "Date.now()" },
                        { title: "Third Task", created_at: "Date.now()" },
                        { title: "Fourth Task", created_at: "Date.now()" }
                    ];
                }
                TaskService.prototype.addTask = function (task) {
                    this.tasks.push(task);
                };
                return TaskService;
            }());
            exports_1("TaskService", TaskService);
            NewTaskComponent = (function () {
                function NewTaskComponent(_sharedService, taskService) {
                    this._sharedService = _sharedService;
                }
                NewTaskComponent.prototype.onSubmit = function (form) {
                    // this.taskService.addTask({title: form._value.title, created_at: "Date.now()"})
                    this._sharedService.insertTask({ title: form._value.title, created_at: "Date.now()" });
                };
                NewTaskComponent = __decorate([
                    core_1.Component({
                        selector: 'new-task',
                        template: "\n    <div class=\"row\">\n      <h3>New Task</h3>\n      <form #f=\"ngForm\" (ngSubmit)=\"onSubmit(f.form)\">\n        <div class=\"form-group\">\n          <label for=\"title\">Title</label> \n          <input\n            ngControl=\"title\" \n            #title=\"ngForm\"\n            id=\"title\"\n            type=\"text\"\n            class=\"form-control\"\n            required />\n        </div>\n        <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n      </form>\n    </div>\n  ",
                        providers: [TaskService]
                    }), 
                    __metadata('design:paramtypes', [SharedService, TaskService])
                ], NewTaskComponent);
                return NewTaskComponent;
            }());
            exports_1("NewTaskComponent", NewTaskComponent);
            TasksComponent = (function () {
                function TasksComponent(_sharedService, tasksService) {
                    this._sharedService = _sharedService;
                    this._sharedService.tasksArray = tasksService.tasks;
                }
                TasksComponent.prototype.ngOnInit = function () {
                    this.tasks = this._sharedService.tasksArray;
                };
                TasksComponent = __decorate([
                    core_1.Component({
                        selector: 'tasks',
                        template: "\n    <div class=\"row\">\n      <h3>Tasks List</h3>\n      <div class=\"col-xs-3\" *ngFor=\"#task of tasks\">\n        {{task.title}}\n      </div>\n    </div>\n  ",
                        providers: [TaskService]
                    }), 
                    __metadata('design:paramtypes', [SharedService, TaskService])
                ], TasksComponent);
                return TasksComponent;
            }());
            exports_1("TasksComponent", TasksComponent);
            // Components - Main
            AppComponent = (function () {
                function AppComponent() {
                    this.date = new Date;
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n      <div class=\"container\">\n        <h1>To-Do List</h1>\n        <h2>Today's Date: {{ date | date:\"MMMM d yyyy\" }}</h2>\n        <new-task></new-task>\n        <tasks></tasks>\n      </div>\n    ",
                        providers: [SharedService],
                        directives: [NewTaskComponent, TasksComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
            browser_1.bootstrap(AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map