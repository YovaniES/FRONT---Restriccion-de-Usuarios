import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ListUsuario } from 'src/app/interfaces/usuario';
import { ExcelreaderService } from 'src/app/services/excelreader.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss'],
})
export class UsuariosComponent implements OnInit {
  @ViewChild('excelfile') excelinputfile!: ElementRef;
  file!: File;

/*   excelname = '';

  clearexcel() {
    this.file != null;
    this.excelname = '';
    this.excelinputfile.nativeElement.value = '';
  } */


  listUsuario: ListUsuario[] = [];

  displayedColumns: string[] = [
    'idrestriction',
    'idssff',
    'value',
  ];

  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private usuarioServices: UsuarioService,
              private excelreaderService: ExcelreaderService) {}

  ngOnInit(): void {
    this.cargarUsuarios();
  }


  exportData(){
    this.excelreaderService.exportData(this.listUsuario, 'usarios.xls')

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
}
