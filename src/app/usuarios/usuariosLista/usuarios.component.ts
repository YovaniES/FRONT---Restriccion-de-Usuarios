import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Restriction } from 'src/app/interfaces/restriction';
import { ListUsuario } from 'src/app/interfaces/usuario';
import {
  exceldata,
  ExcelreaderService,
} from 'src/app/services/excelreader.service';
import { RestrictionService } from 'src/app/services/restriction.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss'],
})
export class UsuariosComponent implements OnInit {
  @ViewChild('excelfile') excelinputfile!: ElementRef;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild('excelfile2') excelinputfile2!: ElementRef;

  listRestric: Restriction[] = [];
  listUsuario: ListUsuario[] = [];

  displayedColumns: string[] = ['idrestriction', 'idssff', 'value'];

  dataSource!: MatTableDataSource<any>;

  excelname2 = '';
  exceldata: exceldata = {
    data: [],
    headers: [],
  };

  file!: File;

  index: number = 0;
  excelname = '';
  fileValue = null;

  constructor(
    private usuarioServices: UsuarioService,
    private excel: ExcelreaderService,
    private restrictionService: RestrictionService
  ) {}

  clearexcel() {
    this.file != null;
    this.excelname = '';
    this.excelinputfile.nativeElement.value = '';
  }

  clearExcel2() {
    this.excelname2 = '';
    this.excelinputfile2.nativeElement.value = '';
  }

  onExcelDown(event: any, index: number) {
    this.index = index;

    if (event) {
      console.log(event);
      this.excelname2 = event.files[0].name;
      this.excel.read(event.files).subscribe(
        (resp) => {
          //this.blockUI.stop();
          console.log(resp);
          this.exceldata = resp;
          this.updateRestriction(this.exceldata.data);
          this.fileValue = null;
        }
      );
    }
  }

  updateRestriction(userList: ListUsuario[]) {
    userList.forEach((user) => {
      const index = this.listUsuario.findIndex(
        (u) => u.idssff == user.idssff
      );
      console.log(index);

      if (index >= 0) {
        this.listUsuario[index].value = user.value == 'activo' ? true : false;
      }
      console.log(this.listUsuario);
    });
  }

  ngOnInit(): void {
    this.cargarUsuarios();
  }

  get RestriccionList() {
    return this.restrictionService.getAllRestrictions();
  }

  cargarRestric() {
    this.listRestric = this.restrictionService.getRestrictiones();
  }

  cargarUsuarios() {
    this.listUsuario = this.usuarioServices.getUsuarios();
    this.dataSource = new MatTableDataSource(this.listUsuario);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  saveUsers() {
    console.log(this.listUsuario);
  }
}
