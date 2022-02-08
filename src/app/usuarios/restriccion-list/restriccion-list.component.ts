import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Restriccion } from 'src/app/interfaces/restriccion';
import { RestriccionService } from 'src/app/services/restriccion.service';
import { crearRestriccionComponent } from '../crear-Restriccion/crear-restriccion.component';

@Component({
  selector: 'app-restriccion-list',
  templateUrl: './restriccion-list.component.html',
  styleUrls: ['./restriccion-list.component.scss'],
})
export class RestriccionListComponent implements OnInit {
  isPopupOpened = true;
  listRestric: Restriccion[] = [];
  @ViewChild("excelfile") excelinputfile!:ElementRef;


  file!:File

  dataSource!: MatTableDataSource<any>;

  constructor(
    private restriccionService:RestriccionService,
    private dialog: MatDialog,
    private _restriccionService: RestriccionService
  ) {}



  ngOnInit() {
    this.cargarRestric();
  }
  excelname="";


  clearexcel(){
    this.file!=null;
    this.excelname="";
    this.excelinputfile.nativeElement.value = "";

  }


  get RestriccionList() {
    return this._restriccionService.getAllRestrictions();
  }

  cargarRestric() {
    this.listRestric = this.restriccionService.getRestrictiones();
    this.dataSource = new MatTableDataSource(this.listRestric);
  }


  addRestriccion() {
    this.isPopupOpened = true;
    const dialogRef = this.dialog.open(crearRestriccionComponent, {
      data: {},
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.isPopupOpened = false;
    });
  }

}
