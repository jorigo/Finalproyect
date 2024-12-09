import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { PreguntasModel } from '../../../models/preguntasModel';
import { PreguntasService } from '../../../services/preguntas.service';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.sass']
})
export class AddComponent implements OnInit {
  public preguntasList: PreguntasModel[] = [];
  public newpregunta: PreguntasModel = new PreguntasModel();
  public nextId: string = " ";
  items: any;
  isFormReady: boolean = true;
  

  constructor(private preguntasService: PreguntasService, private router: Router) { }

  ngOnInit() {
    this.preguntasService.getpreguntas().subscribe((res: any) => {
      console.log(res);
      this.preguntasList = res;
  
      // Calcular el próximo ID único basado en el ID más alto de la lista
      const maxId = this.preguntasList.reduce((max: number, pregunta: any) => 
        Math.max(max, parseInt(pregunta.id, 10)), 0);
      this.nextId = String(maxId + 1);
  
      this.newpregunta.id = this.nextId;
    });
  }
  
  onGuardar(): void {
    this.newpregunta.id = this.nextId; // Asignar el ID calculado antes de guardar
    this.preguntasService.postPreguntas(this.newpregunta).subscribe((res: any) => {
      console.log(res);
  
      // Agregar el nuevo registro a la lista local
      this.preguntasList.push(res);
  
      // Reiniciar el formulario y calcular el próximo ID único
      this.newpregunta = new PreguntasModel();
      const maxId = this.preguntasList.reduce((max: number, pregunta: any) => 
        Math.max(max, parseInt(pregunta.id, 10)), 0);
      this.nextId = String(maxId + 1);
  
      this.newpregunta.id = this.nextId;
    });
  }
  
    back(){
      this.router.navigate(['/preguntas']);
    }

  
}