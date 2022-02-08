import { C } from '@angular/cdk/keycodes';
import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
//import { excelResponse } from '@models';
//import { exceldata, ExcelreaderService } from 'app/core/services/excelreader.service';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { ExcelreaderService } from 'src/app/services/excelreader.service';
import Swal from 'sweetalert2';
//import { HermesService } from '../../hermes.service';

export interface excelResponse{
	errores: number[]
	total: number
	wait: number
}


@Component({
  selector: 'app-update-position',
  templateUrl: './update-position.component.html',
  styleUrls: ['./update-position.component.scss']
})
export class UpdatePositionComponent implements OnInit {
  @BlockUI() blockUI!: NgBlockUI;
  showing=1;
  showdetail=false;
  file!:File
  constructor(
    //private serv:HermesService,
    private excel:ExcelreaderService ) { }

  ngOnInit(): void {
  }
  excelname="";


  @ViewChild("excelfile") excelinputfile!:ElementRef;

  onExcelChange(e:File[]){
    this.file=e[0];
    this.excelname=e[0].name

  }
  uploadFile(){
    Swal.fire({
      title: '¿Estas seguro de ingresar las solicitudes?',
      text: "Recuerda que las solicitudes que están en el excel deben estar aprobadas por las áreas correspondientes",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, enviar!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.blockUI.start("Leyendo archivo Excel")
      /*   const subs = this.serv.uploadFileMasivo(this.file).subscribe((resp:excelResponse)=>{
          this.blockUI.stop()
          let msg="El Excel se ha cargado correctamente", err=''
          if(resp.errores.length>0){
            msg='El Excel tiene observaciones'
            err= resp.errores.length>0? "ademas " + resp.errores.length +
            " error(es) en la línea(s) "+ resp.errores.join():"" ;
            if(resp.total==0)msg='El Excel tiene observaciones';
          }

          Swal.fire(
            msg,
          'Se agregó '+ resp.total +" registro(s) <br>"+
           "de los cuales " + resp.wait +" están en espera de archivo de sustento <br>"
           + err,
          resp.errores.length>0?'warning':'success'
        )
          subs.unsubscribe()

        }) */
       /* Swal.fire({
          icon:"info",
          title:"El archivo ha sido enviado",
          text:"Se estará procesando la información. Cuando esté listo te llegará al correo. El tiempo de espera aprox es de : 5min."
        });*/
        this.clearexcel()
      }
    })

  }

  downloadFile(){
    this.blockUI.start("Descargando Formato")
 /*    this.serv.downloadFileExcel("ALL").subscribe(
      (resp:any)=>
        {
          this.blockUI.stop()
          const blob = new Blob([resp.body], { type: [resp.body.type].toString() });
          const a = document.createElement('a')
          const objectUrl = URL.createObjectURL(blob)
          a.href = objectUrl
          a.download = "formato.xlsm";
          a.click();
          URL.revokeObjectURL(objectUrl);
        }
      ); */
  }
  createFile(){
    //this.serv.createFile().subscribe()
  }

  clearexcel(){
    this.file!=null;
    this.excelname="";
    this.excelinputfile.nativeElement.value = "";

  }


  clearForm2(){
      this.clearexcel();
  }


}
