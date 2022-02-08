import { Injectable } from '@angular/core';
import { ListUsuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  listUsuarios: ListUsuario[] = [
    {id: '111111', nombre:'Kalen Valle',         restriccion: false, restriccion2:'SI', cumplio:false},
    {id: '222222', nombre:'Belinda Valle',       restriccion: false, restriccion2:'SI', cumplio:false},
    {id: '333333', nombre:'Jane Medina',         restriccion: false, restriccion2:'SI', cumplio:false},
    {id: '444444', nombre:'Andrea Cameron B.',   restriccion: false, restriccion2:'SI', cumplio:false},
    {id: '555555', nombre:'Mary Torres',         restriccion: false, restriccion2:'SI', cumplio:false},
    {id: '666666', nombre:'Kim Calderon',        restriccion: true,  restriccion2:'SI', cumplio:false},
    {id: '777777', nombre:'Jane Medina',         restriccion: false, restriccion2:'SI', cumplio:false},
    {id: '888888', nombre:'Andrea Tapia B.',     restriccion: false, restriccion2:'SI', cumplio:false},
    {id: '999999', nombre:'Bruno Angeles B.',    restriccion: false, restriccion2:'SI', cumplio:false},
    {id: '101010',nombre:'Camila Cameron B.',    restriccion: true, restriccion2:'SI', cumplio:false},
  ];


  constructor() { }


  getUsuarios(){
    return this.listUsuarios.slice();
  }
}
