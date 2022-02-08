import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RestriccionService } from 'src/app/services/restriccion.service';

@Component({
  selector: 'app-crear-restriccion',
  templateUrl: './crear-restriccion.component.html',
  styleUrls: ['./crear-restriccion.component.scss']
})
export class crearRestriccionComponent implements OnInit {

  public _restriccionForm!: FormGroup;

  constructor(private fb: FormBuilder,
              private dialogRef: MatDialogRef<crearRestriccionComponent>,
              private _restriccionService: RestriccionService,

              @Inject(MAT_DIALOG_DATA) public data: any) { }


  onNoClick(): void {
    this.dialogRef.close();
   }

  ngOnInit() {
    this._restriccionForm = this.fb.group({
      ID:         [ this.data.ID],
      nombre:     [ this.data.nombre, [Validators.required]],
      descripcion:[ this.data.descripcion],
    });
  }

  onSubmit() {
    if (isNaN(this.data.ID)) {
      this._restriccionService.addRestriccion(this._restriccionForm.value);
      this.dialogRef.close();
    } else {
      this.dialogRef.close();
    }
  }
}
