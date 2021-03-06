import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Restriction } from 'src/app/interfaces/restriction';
import { RestrictionService } from 'src/app/services/restriction.service';
import { crearRestriccionComponent } from '../create-Restriction/crear-restriccion.component';

@Component({
  selector: 'app-restriccion-list',
  templateUrl: './restriccion-list.component.html',
  styleUrls: ['./restriccion-list.component.scss'],
})
export class RestriccionListComponent implements OnInit {
  isPopupOpened = true;
  listRestric: Restriction[] = [];
  @Output() newRestriction = new EventEmitter<any>();

  @ViewChild('excelfile') excelinputfile!: ElementRef;

  file!: File;
  excelname = '';

  dataSource!: MatTableDataSource<any>;

  constructor(
    private restrictionService: RestrictionService,
    private dialog: MatDialog,
  ) {}

  ngOnInit() {
    this.cargarRestric();
  }

  clearexcel() {
    this.file != null;
    this.excelname = '';
    this.excelinputfile.nativeElement.value = '';
  }

  get RestriccionList() {
    return this.restrictionService.getAllRestrictions();
  }

  cargarRestric() {
    this.listRestric = this.restrictionService.getAllRestrictions();
    this.dataSource = new MatTableDataSource(this.listRestric);

    console.log(this.listRestric);
  }

  addRestriccion() {
    this.isPopupOpened = true;
    const dialogRef = this.dialog.open(crearRestriccionComponent, {
      data: {},
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result)
      if (result) {
        this.newRestriction.emit(result);
      }
      this.isPopupOpened = false;
    });
  }
}
