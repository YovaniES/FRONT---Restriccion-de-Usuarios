import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Angular material
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { UsuariosComponent } from './userList/usuarios.component';
import { RouterModule } from '@angular/router';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { RestriccionListComponent } from './restriccion-list/restriccion-list.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { crearRestriccionComponent } from './create-Restriction/crear-restriccion.component';


@NgModule({
  declarations: [
    UsuariosComponent,
    crearRestriccionComponent,
    RestriccionListComponent,
  ],

  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,

    //Angular material
    MatIconModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatCheckboxModule,
  ],

  exports: [
    UsuariosComponent,
    crearRestriccionComponent,
    RestriccionListComponent,

    RouterModule,
    FormsModule,
    /*Angular material*/
    HttpClientModule,
    MatIconModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatCheckboxModule,
  ],
  entryComponents: [crearRestriccionComponent],

})
export class UsuarioModule {}
