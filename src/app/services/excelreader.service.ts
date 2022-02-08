import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import * as XLSX from 'xlsx';


@Injectable({
  providedIn: 'root'
})
export class ExcelreaderService {

  constructor() { }

  read(input_value: File[], page:number=0):Observable<exceldata> {
    // Validar input
    const file = input_value[page];

    let workBook = null;
    let jsonData = null;
    let headers = [];
    const reader = new FileReader();

    reader.readAsBinaryString(file);

    return new Observable( (observer:Observer<exceldata>)=>{
      reader.onload = (event) => {
          const data = reader.result;
          workBook = XLSX.read(data, { type: 'binary' });
          // Validar el libro
          const SHEET_NAME = workBook.SheetNames[0];
          const sheet = workBook.Sheets[SHEET_NAME];
          headers = this.get_header_row(sheet);
          jsonData = XLSX.utils.sheet_to_json(sheet);

          observer.next({data:jsonData, headers});
          observer.complete();
      }
      reader.onerror = (error: any): void => {
        observer.error(error);
      }
    });
  }

  get_header_row(sheet:any)   {
    var headers = [];
    var range = XLSX.utils.decode_range(sheet['!ref']);
    var C, R = range.s.r;
    /* walk every column in the range */
    for(C = range.s.c; C <= range.e.c; ++C)
    {
        var cell = sheet[XLSX.utils.encode_cell({c:C, r:R})]
        /* find the cell in the first row */
        var hdr = "UNKNOWN " + C;
        if(cell && cell.t)
        hdr = XLSX.utils.format_cell(cell);
        headers.push(hdr);
    }
    return headers;
  }

}

export interface exceldata{
  data:any[],
  headers: string[]
}
