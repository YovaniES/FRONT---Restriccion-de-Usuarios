import { Injectable } from '@angular/core';
import { Restriccion } from '../interfaces/restriccion';

@Injectable({
  providedIn: 'root',
})
export class RestriccionService {
  _restricList: Restriccion[] = [
    { name: 'Realizó las clases',
      description: 'No tuvo el horario establecido',
      value: true },
    {
      name: 'Tiene las 2 dosís de vacuna',
      description: 'Temas personales',
      value: false,
    },
  ];

  constructor() {}

  addRestriccion(restric: Restriccion) {
    this._restricList.push(restric);
  }

  getAllRestrictions() {
    return this._restricList;
  }

  getRestrictiones() {
    return this._restricList.slice();
  }
}
