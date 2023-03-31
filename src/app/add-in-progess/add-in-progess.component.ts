import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Task } from '../model/task';

@Component({
  selector: 'app-add-in-progess',
  templateUrl: './add-in-progess.component.html',
  styleUrls: ['./add-in-progess.component.css']
})
export class AddInProgessComponent implements OnInit {
  addPorgess!: FormGroup;
  name = '^[a-zA-Z].*';
  constructor(
    private dialogRef: MatDialogRef<AddInProgessComponent>,
  ) { }

  ngOnInit(): void {
    this.dataForm();
  
  }
  dataForm() {
    this.addPorgess = new FormGroup({
      id: new FormControl(''),
      Name: new FormControl('', [
        Validators.required,
        Validators.pattern(this.name),
      ]),
      isChecked: new FormControl(false),
      inTodo:new FormControl(false),
      inProgress:new FormControl(true),
      inCompleted: new FormControl(false) 
    })
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.addPorgess.controls[controlName].hasError(errorName);
  };

  addData(Progessdata: any) {
    var length = Progessdata.length + 1;
    this.addPorgess.controls['id'].setValue(length);
    Progessdata.push(this.addPorgess.value);
    localStorage.setItem('formValues', JSON.stringify(Progessdata));
    alert("Task Added Successfully..!")
  }

  submit(){
    var Progessdata=[];
    Progessdata = JSON.parse(localStorage.getItem('formValues') || '[]');
      this.addData(Progessdata);
    }
}
