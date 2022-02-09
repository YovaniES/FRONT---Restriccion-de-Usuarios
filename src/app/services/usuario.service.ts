import { Injectable } from '@angular/core';
import { ListUsuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  listUsuarios: ListUsuario[] = [
    {idrestriction:1,  idssff: '111111', value:false},
    {idrestriction:2,  idssff: '222222', value:false},
    {idrestriction:3,  idssff: '333333', value:false},
    {idrestriction:4,  idssff: '444444', value:false},
    {idrestriction:5,  idssff: '555555', value:false},
    {idrestriction:6,  idssff: '666666', value:true},
    {idrestriction:7,  idssff: '777777', value:false},
    {idrestriction:8,  idssff: '888888', value:false},
    {idrestriction:9,  idssff: '999999', value:true},
    {idrestriction:10, idssff: '101010', value:false},
  ];


  constructor() { }


  getUsuarios(){
    return this.listUsuarios.slice();
  }
}
