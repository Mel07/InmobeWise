import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { LikeComponent } from '../like/like.component';
import { MenuinmuebleComponent } from '../menuinmueble/menuinmueble.component';
import { InformacioninmuebleComponent } from '../informacioninmueble/informacioninmueble.component';
import {ThemePalette} from '@angular/material/core';
import {MatChipsModule} from '@angular/material/chips';

export interface ChipColor {
  name: string;
  color: ThemePalette;
}

@Component({
  selector: 'app-avisos',
  templateUrl: './avisos.component.html',
  styleUrls: ['./avisos.component.scss'],
  
  // standalone: true,
  // imports: [MatButtonModule, MatDialogModule, MenuinmuebleComponent],
})
export class AvisosComponent  {
 
  constructor(public dialog: MatDialog) {}
  openDialog() {
    const dialogRef = this.dialog.open(LikeComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  InforInmu(){

    const dialogRef = this.dialog.open(InformacioninmuebleComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });


  }


  
  mostrarTabla = false;

  toggleTabla() {
    this.mostrarTabla = !this.mostrarTabla;
  }
    




}
