import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormGroup, } from '@angular/forms';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { HttpService } from 'src/app/services/http/http.service';
import { FormBuilder } from '@angular/forms';
import { infoUsuario } from 'src/app/services/Interface/Interfaces';
import { CompanyAdminpasswordComponent } from '../ventanaemergente/company-adminpassword/company-adminpassword.component';

@Component({
  selector: 'app-perfilcompany-admin',
  templateUrl: './perfilcompany-admin.component.html',
  styleUrls: ['./perfilcompany-admin.component.scss']
})
export class PerfilcompanyAdminComponent implements OnInit {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  toppings = new FormControl('');
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];

  formGeneral!: FormGroup;
  loading = false;
  hide2 = true;

  datos!: infoUsuario;
  datos2!: infoUsuario;

  constructor(
    public dialog: MatDialog,
    private formBuilder: FormBuilder,
    // private dialog: MatDialog,
    private httpService: HttpService,
  ) { }

  ngOnInit(): void {
    this.obtenerInfo();
    this.formGeneral = this.formBuilder.group({
      nombre:['',[Validators.required]],
      apellidopaterno:['',[Validators.required]],
      apellidomaterno:['',[Validators.required]],
      curp:['',[Validators.required]],
      rfc:['',[Validators.required]],
      contactoprincipal:['',[Validators.required]],
      contactoemergencia:['',[Validators.required]],
      email:['',[Validators.required]],
      nombreusuario:['',[Validators.required]],
      imageInput:['',[Validators.required]],
    });
  }

  // Apartado Dialog Pantalla Emergente 

  openpassword() {

    const dialogRef = this.dialog.open(CompanyAdminpasswordComponent, {
      width: '60vh',
      height: 'auto',
      disableClose: true
    });
  }

  openDialog(): void {

  }

  Guardardatos() {


    if (this.formGeneral) {
      let id = localStorage.getItem("Id_Usuario");
      let nombre = this.formGeneral.value.nombre;
      let apellidopaterno = this.formGeneral.value.apellidopaterno;
      let apellidomaterno = this.formGeneral.value.apellidomaterno;
      let curp = this.formGeneral.value.curp;
      let rfc = this.formGeneral.value.rfc;
      let contactoprincipal = this.formGeneral.value.contactoprincipal;
      let contactoemergencia = this.formGeneral.value.contactoemergencia;
      let email = this.formGeneral.value.email;
      let nombreusuario = this.formGeneral.value.nombreusuario;
      let imageInput = this.formGeneral.value.imageInput;
  //id , nombre , apellidopaterno , apellidomaterno , curp , rfc ,  contactoprincipal , contactoemergencia ,  email ,  nombreusuario , imageInput
      this.httpService.updateInfoUsuario(id , nombre , apellidopaterno , apellidomaterno , curp , rfc ,  contactoprincipal , contactoemergencia ,  email ,  nombreusuario ).subscribe((data : any)=>{
        if(data ==1){
          alert("Se actualizo usuario");
        }else{
          alert("Error al actualizar");
        }
      })

    }
  }

  obtenerInfo(){
    this.httpService.obtenerInfoUsuario(localStorage.getItem("Id_Usuario")).subscribe((data : any) =>
    {if(data ==201){
      alert("Error al leer usuario");
    }else{
    
      this.datos = data;
      this.obtenerInfo2();
    }})
  }
  obtenerInfo2(){
    this.httpService.obtenerInfoUsuario2(localStorage.getItem("Id_Usuario")).subscribe((data : any) =>
    {if(data ==201){
      alert("Error al leer usuario");
    }else{
      
      this.datos.Nombre_Usuario = data.Nombre_Usuario;
      this.datos.Img_Profile = data.Img_Profile;
    }})
  }


}