import { asLiteral } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AddCompletedComponent } from '../add-completed/add-completed.component';
import { AddInProgessComponent } from '../add-in-progess/add-in-progess.component';
import { AddTaskComponent } from '../add-task/add-task.component';
import { Task } from '../model/task';
export interface Tile {
  cols: number;
  rows: number;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  data: any = [];
  isTodo: any = false;
  inProgessData: any = [];
  completedData: any = [];
  taskChecked: any = false;
  items: any=[];
  progress: any=[];
  data1: any;
 

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    let data1=[{
      id:1,
      Name:"Task",
      isChecked:false,
      inTodo:true,
      inProgress:false,
      inCompleted:false
    },{
      id:2,
      Name:"Task 2",
      isChecked:false,
      inTodo:true,
      inProgress:false,
      inCompleted:false
    },{
      id:3,
      Name:"Task 3",
      isChecked:false,
      inTodo:true,
      inProgress:false,
      inCompleted:false
    }];
    localStorage.setItem('formValues', JSON.stringify(data1));

    if (localStorage.getItem('formValues') != null) {
      this.data = JSON.parse(localStorage.getItem('formValues')!);
    }

    if (localStorage.getItem('formValues') != null) {
      let toDoList = JSON.parse(localStorage.getItem('formValues')!);
      toDoList.forEach((task: Task) => {
        if (task.isChecked === true) this.items.push(task);
      });
    }
   
  }

  addToDo() {
    this.dialog.open(AddTaskComponent, {
      width: '20%',
      height: '30%',
    });
    this.dialog.afterAllClosed.subscribe(() => this.data = JSON.parse(localStorage.getItem('formValues')!));
  }
  addInPorgess() {
    this.dialog.open(AddInProgessComponent, {
      width: '20%',
      height: '30%',
    });
    this.dialog.afterAllClosed.subscribe(() => this.data = JSON.parse(localStorage.getItem('formValues')!));
  }
  addCompleted() {
    this.dialog.open(AddCompletedComponent, {
      width: '20%',
      height: '30%',
    });
    this.dialog.afterAllClosed.subscribe(() => this.data = JSON.parse(localStorage.getItem('formValues')!));
  }

  deleteTask(id: any) {
    let index = this.data.findIndex((e: any) => e.id === id);
    if (index !== -1) {
      this.data.splice(index, 1);
    }
    localStorage.setItem('formValues', JSON.stringify(this.data));
  }
 
  checked(isCheck: any) {
    if (localStorage.getItem('formValues') != null) {
      let toDoList = JSON.parse(localStorage.getItem('formValues')!);
      toDoList.find((record: any, j: number) => {
        if (record.id === isCheck.id) {
          record['isChecked'] = record['isChecked'] == false ? true : false;
          record['inTodo'] = record['inTodo'] ==true?false:true;
          record['inProgress'] = record['inProgress'] ==false?true:false;
        }
      });
      localStorage.setItem('formValues', JSON.stringify(toDoList));
      console.log(toDoList);
      this.data = toDoList;
      console.log(this.data);
    }
   // window.location.reload();
  }
  inProgess(isCheck:any){
    if (localStorage.getItem('formValues') != null) {
      let inporgressList = JSON.parse(localStorage.getItem('formValues')!);
      inporgressList.find((record: any, j: number) => {
        if (record.id === isCheck.id) {
          record['isChecked'] = record['isChecked'] == false ? true : false;
          record['inProgress'] = record['inProgress'] ==true?false:true;
          record['inCompleted'] = record['inCompleted'] ==false?true:false;
        }
      });
      localStorage.setItem('formValues', JSON.stringify(inporgressList));
      this.data = inporgressList;
    }
   // window.location.reload();
  }
 
}
