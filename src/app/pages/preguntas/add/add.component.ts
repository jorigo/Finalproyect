import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EncuestasService } from './../../../services/encuestas.service';
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
  public nextId: string = "";
  items: any;
  isFormReady: boolean = true;
  

  constructor(private preguntasService: PreguntasService, private router: Router) { }

  ngOnInit(): void {
    this.preguntasService.getpreguntas().subscribe((res: any) => {
      console.log(res);
      this.preguntasList = res;
      this.nextId = String(this.preguntasList.length + 1);
      this.newpregunta.id = this.nextId;
    });
  }

  onGuardar() {
    this.preguntasService.postPreguntas(this.newpregunta).subscribe((res: any) => {
      console.log(res);
      this.preguntasList.push(res);
      this.newpregunta = new PreguntasModel();
      this.nextId = String(this.preguntasList.length + 1);
      this.newpregunta.id = this.nextId;

    });
  }
    back(){
      this.router.navigate(['/preguntas']);
    }

  
}