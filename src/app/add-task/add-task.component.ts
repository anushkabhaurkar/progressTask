import { outputAst } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  addForm!: FormGroup;
  name = '^[a-zA-Z].*';
  constructor(
    private dialogRef: MatDialogRef<AddTaskComponent>,
  ) { }

  ngOnInit(): void {
    this.inIt();
  }
  
  inIt(){
    this.addForm = new FormGroup({
      id: new FormControl(''),
      Name: new FormControl('', [
        Validators.required,
        Validators.pattern(this.name),
      ]),
      isChecked: new FormControl(false),
      inTodo:new FormControl(true),
      inProgress:new FormControl(false),
      inCompleted: new FormControl(false) 
    })
  }
  public hasError = (controlName: string, errorName: string) => {
    return this.addForm.controls[controlName].hasError(errorName);
  };

  addData(data: any) {
    var length = data.length + 1;
    this.addForm.controls['id'].setValue(length);
    data.push(this.addForm.value);
    localStorage.setItem('formValues', JSON.stringify(data));
    alert("Task Added Successfully..!")
  }

  submit(){
    var data=[];
    data = JSON.parse(localStorage.getItem('formValues') || '[]');
      this.addData(data);
    }
}
