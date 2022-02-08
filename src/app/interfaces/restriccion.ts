export interface Restriccion {
  id: number;
  name: string;
  description: string;
  value: boolean;
}

export interface poPicklist {
  code: string;
  possff: string;
  tname: string;
  name: string;
  status: number;
  selected: boolean;
  vacant: boolean;
}

export interface dataExcel {
  idssff: string;
  name: string;
  location: string;
  bu: string;
  workstream: string;
  po: string;
  liderIdssff: string;
  liderName: string;
}
