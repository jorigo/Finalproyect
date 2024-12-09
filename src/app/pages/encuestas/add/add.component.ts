import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EncuestasService } from './../../../services/encuestas.service';
import { EncuestaModel } from '../../../models/encuestaModel';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.sass']
})
export class AddComponent implements OnInit {
  public encuestasList: EncuestaModel[] = [];
  public newEcuesta: EncuestaModel = new EncuestaModel();
  public nextId: string = " ";
  items: any;
  isFormReady: boolean = true;
  

  constructor(private encuestasService: EncuestasService, private router: Router) { }

  ngOnInit(): void {
    this.encuestasService.getencuesta().subscribe((res: any) => {
      console.log(res);
      this.encuestasList = res;
  
      // Calcular el próximo ID único basado en el ID más alto de la lista
      const maxId = this.encuestasList.reduce((max: number, pregunta: any) => 
        Math.max(max, parseInt(pregunta.id, 10)), 0);
      this.nextId = String(maxId + 1);
  
      this.newEcuesta.id = this.nextId;
    });
  }
  
  onGuardar(): void {
    this.newEcuesta.id = this.nextId; // Asignar el ID calculado antes de guardar
    this.encuestasService.postEncuestas(this.newEcuesta).subscribe((res: any) => {
      console.log(res);
  
      // Agregar el nuevo registro a la lista local
      this.encuestasList.push(res);
  
      // Reiniciar el formulario y calcular el próximo ID único
      this.newEcuesta = new EncuestaModel();
      const maxId = this.encuestasList.reduce((max: number, pregunta: any) => 
        Math.max(max, parseInt(pregunta.id, 10)), 0);
      this.nextId = String(maxId + 1);
  
      this.newEcuesta.id = this.nextId;

      alert('Registro Guardado.');
      this.router.navigate(['/encuestas']);

    });
  }
    
      back(){
        this.router.navigate(['/encuestas']);
      }
}