import { Component, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-arvice-space',
  templateUrl: './arvice-space.component.html',
  styleUrls: ['./arvice-space.component.scss']
})
export class ArviceSpaceComponent implements OnInit {
  mobileQuery: MediaQueryList;
  nombre: any;
  fillerNav = [
    { name: "Home", route: "mostrarInmuebles", icon: "home", label: "Home", number: '0' },
    { name: "Register", route: "Agregar", icon: "groups", label: "Registrar Usuario", number: '0' },
    // { name: "Asignar-reasignar", route: "mostrarInmuebles", icon: "groups", label: "", number: '0' },
    //{ name: "Calendario", route: "calendario", icon: "date_range", label: " Agenda", number: '0' },
    // { name: "Hitobroker", route: "Hitobroker",icon: "event" , label: "Fecha Hito",number:'0' },
    //{ name: "Inventario", route: "invesntario", icon: "inventory", label: "Inventario", number: '0' },
    //  { name: "Asignar Users", route: "asignarUsers", icon: "event", label: "Asginar Reasignar Usuarios", number: '0' },
    // { name: "fechashito", route: "fechashito", icon: "collections_bookmark", label: "fechashito ", number: '0' },
    //{ name: "Catalogoinmueble", route: "catalogoinmueble", icon: "collections_bookmark", label: "Sube tu Catalogo de Inmueble", number: '0' },
    { name: "Salir", route: "web", icon: "logout", label: "Salir", number: '1' }

  ];

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private router: Router) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    this.nombre = localStorage.getItem("Nombre_Usuario");
  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  ngOnDestroy(): void {
    //this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  shouldRun = true;

  public salir() {
    //this.router.navigate(["/web"]);
    // alert("diste clic en salir"+op);
  }

}
