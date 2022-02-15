import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Restriction } from 'src/app/interfaces/restriction';
import { ListUser } from 'src/app/interfaces/user';
import {
  exceldata,
  ExcelreaderService,
} from 'src/app/services/excelreader.service';
import { RestrictionService } from 'src/app/services/restriction.service';
import { UserService } from 'src/app/services/user.service';

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

  listUsuario: ListUser[] = [];
  restrictionList: Restriction[] = [];

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
  fileValue: FormControl = new FormControl();

  constructor(
    private userService: UserService,
    private excel: ExcelreaderService,
    private restrictionService: RestrictionService
  ) {}

  ngOnInit(): void {
    this.cargarUsuarios();
    this.getRestriccionList();
  }

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
      this.excelname2 = event.files[0].name;
      this.excel.read(event.files).subscribe((resp) => {
        this.exceldata = resp;
        this.updateRestriction(this.exceldata.data);
        this.fileValue.setValue(null);
      });
    }
  }

  updateRestriction(userList: any[]) {
    userList.forEach((user) => {
      const index = this.findUserIndex(user);
      const indexRestriction = this.findRestriction(index, user);

      if (index >= 0 && indexRestriction >= 0) {
        this.listUsuario[index].restrictions[indexRestriction].value =
          user.value == 'activo' ? true : false;
          this.onChangeRestriction(index);
        }

    });
  }

  findUserIndex(user:any):number{
    return this.listUsuario.findIndex((u) => u.idssff == user.idssff)
  }

  findRestriction(index: number, user: any) {
    return this.listUsuario[index].restrictions.findIndex(
      (restriction) => restriction.idRestriction == user.idRestriction );
  }

  getRestriccionList() {
    this.restrictionList = this.restrictionService.getAllRestrictions();
  }

  cargarUsuarios() {
    this.listUsuario = this.userService.getUsuarios();
    this.mapRestrictions();
    this.dataSource = new MatTableDataSource(this.listUsuario);
  }

  mapRestrictions() {
    this.listUsuario.map((user, index) => {
      user.value = this.findFalseRestriction(index);
    });
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

  onChangeRestriction(i: number) {
    this.listUsuario[i].value = this.findFalseRestriction(i);
  }

  findFalseRestriction(i: number): boolean {
    const hasAFalse = this.listUsuario[i].restrictions.find(
      (restriction) => !restriction.value
    );
    return hasAFalse ? false : true;
  }

  doPageChangeDetail() {}
}
