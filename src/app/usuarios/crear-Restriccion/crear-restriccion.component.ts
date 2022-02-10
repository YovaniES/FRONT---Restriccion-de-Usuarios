import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RestrictionService } from 'src/app/services/restriction.service';

@Component({
  selector: 'app-crear-restriccion',
  templateUrl: './crear-restriccion.component.html',
  styleUrls: ['./crear-restriccion.component.scss']
})
export class crearRestriccionComponent implements OnInit {

  public restriccionForm!: FormGroup;

  options = [
    { value: true, text: 'SI' },
    { value: false, text: 'NO' },
  ];


  constructor(private fb: FormBuilder,
              private dialogRef: MatDialogRef<crearRestriccionComponent>,
              private restrictionService: RestrictionService,

              @Inject(MAT_DIALOG_DATA) public data: any) { }



  onNoClick(): void {
    this.dialogRef.close();
   }

  ngOnInit() {
    this.restriccionForm = this.fb.group({
      name:       [ this.data.name, [Validators.required]],
      description:[ this.data.description],
      value: [],

    });
  }

  saveRestriction(){
    console.log(this.restriccionForm.value)
  }


  onSubmit() {
    if (isNaN(this.data.ID)) {
      const body = {...this.restriccionForm.value}

      body.value = body.value === 'true'? true :false

      this.restrictionService.addRestriction(body);
      this.dialogRef.close();
    } else {
      this.dialogRef.close();
    }
  }
}
