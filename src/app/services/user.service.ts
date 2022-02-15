import { Injectable } from '@angular/core';
import { ListUser } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  listUsuarios: ListUser[] = [
    { idssff: '111111', name: 'Any Watson',         value: false, restrictions:[{idRestriction:1,value:false}, {idRestriction:2,value:true}] },
    { idssff: '222222', name: 'Belinda Ares B',     value: false, restrictions:[{idRestriction:1,value:false}, {idRestriction:2,value:false}] },
    { idssff: '333333', name: 'Karen Valladolid J', value: false, restrictions:[{idRestriction:1,value:false}, {idRestriction:2,value:false}] },
    { idssff: '444444', name: 'Camila Stron F.',    value: false, restrictions:[{idRestriction:1,value:false}, {idRestriction:2,value:false}] },
    { idssff: '555555', name: 'Angela Linares V.',  value: false, restrictions:[{idRestriction:1,value:false}, {idRestriction:2,value:false}] },
    { idssff: '666666', name: 'Katerin Briones G.', value: false, restrictions:[{idRestriction:1,value:false}, {idRestriction:2,value:false}] },
    { idssff: '777777', name: 'Fernando Faris B.',  value: false, restrictions:[{idRestriction:1,value:false}, {idRestriction:2,value:false}] },
    { idssff: '888888', name: 'Celiz Villa E.',     value: false, restrictions:[{idRestriction:1,value:false}, {idRestriction:2,value:false}] },
    { idssff: '999999', name: 'Guisel Quiroz H.',   value: false, restrictions:[{idRestriction:1,value:false}, {idRestriction:2,value:false}] },
    { idssff: '101010', name: 'Lady Quiroz H.',     value: false, restrictions:[{idRestriction:1,value:true},  {idRestriction:2,value:true}] },
  ];

  constructor() {}

  getUsuarios() {
    return this.listUsuarios.slice();
  }

  addUser(restriction:any){
    this.listUsuarios.map((user, index) => {
      user.restrictions.push({idRestriction:index+1, value: restriction.value})
    })
  }
}
