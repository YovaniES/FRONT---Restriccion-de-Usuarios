import { Injectable } from '@angular/core';
import { Restriction } from '../interfaces/restriction';

@Injectable({
  providedIn: 'root',
})
export class RestrictionService {
  restricList: Restriction[] = [
    { name: 'Realizó las clases actualización',
      description: 'No tuvo el horario establecido',
      value: true },
    {
      name: 'Tiene las 2 dosís de vacuna',
      description: 'Temas personales',
      value: false,
    },
  ];

  constructor() {}

  addRestriction(restric: Restriction) {
    this.restricList.push(restric);
  }

  getAllRestrictions() {
    return this.restricList;
  }

  getRestrictiones() {
    return this.restricList.slice();
  }
}
