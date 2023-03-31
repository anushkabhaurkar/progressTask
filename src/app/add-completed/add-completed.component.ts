import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-completed',
  templateUrl: './add-completed.component.html',
  styleUrls: ['./add-completed.component.css']
})
export class AddCompletedComponent implements OnInit {
  completeForm!: FormGroup;
  name = '^[a-zA-Z].*';
  constructor(
    private dialogRef: MatDialogRef<AddCompletedComponent>,
  ) { }
  ngOnInit(): void {
    this.inIt();
  }
  inIt(){
    this.completeForm = new FormGroup({
      id: new FormControl(''),
      Name: new FormControl('', [
        Validators.required,
        Validators.pattern(this.name),
      ]),
      isChecked: new FormControl(false),
      inTodo:new FormControl(false),
      inProgress:new FormControl(false),
      inCompleted: new FormControl(true) 
    })
  }
  public hasError = (controlName: string, errorName: string) => {
    return this.completeForm.controls[controlName].hasError(errorName);
  };

  addData(completeData: any) {
    var length = completeData.length + 1;
    this.completeForm.controls['id'].setValue(length);
    completeData.push(this.completeForm.value);
    localStorage.setItem('formValues', JSON.stringify(completeData));
    alert("Task Added Successfully..!")
  }

  submit(){
    var completeData=[];
    completeData = JSON.parse(localStorage.getItem('formValues') || '[]');
      this.addData(completeData);
    }
  }