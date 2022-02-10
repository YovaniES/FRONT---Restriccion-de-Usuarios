import { Injectable } from '@angular/core';
import { ListUsuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  listUsuarios: ListUsuario[] = [
    { idssff: '111111', name: 'Any Watson',         value: false, restriction:[{idRestriction:2,value:false}] },
    { idssff: '222222', name: 'Belinda Ares B',     value: true , restriction:[{idRestriction:2,value:false}]},
    { idssff: '444444', name: 'Camila Stron F.',    value: false, restriction:[{idRestriction:2,value:false}] },
    { idssff: '555555', name: 'Angela Linares V.',  value: false, restriction:[{idRestriction:2,value:false}] },
    { idssff: '666666', name: 'Katerin Briones G.', value: true , restriction:[{idRestriction:2,value:false}]},
    { idssff: '777777', name: 'Fernando Faris B.',  value: false, restriction:[{idRestriction:2,value:false}] },
    { idssff: '333333', name: 'Karen Valladolid J', value: false, restriction:[{idRestriction:2,value:false}] },
    { idssff: '888888', name: 'Celiz Villa E.',     value: false, restriction:[{idRestriction:2,value:false}] },
    { idssff: '999999', name: 'Guisel Quiroz H.',   value: true , restriction:[{idRestriction:2,value:false}]},
  ];

  constructor() {}

  getUsuarios() {
    return this.listUsuarios.slice();
  }
}
