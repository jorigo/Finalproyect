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
  public nextId: string = "";
  items: any;
  isFormReady: boolean = true;
  

  constructor(private encuestasService: EncuestasService, private router: Router) { }

  ngOnInit(): void {
    this.encuestasService.getencuesta().subscribe((res: any) => {
      console.log(res);
      this.encuestasList = res;
      this.nextId = String(this.encuestasList.length + 1);
      this.newEcuesta.id = this.nextId;
    });
  }

  onGuardar() {
    this.encuestasService.postEncuestas(this.newEcuesta).subscribe((res: any) => {
      console.log(res);
      this.encuestasList.push(res);
      this.newEcuesta = new EncuestaModel();
      this.nextId = String(this.encuestasList.length + 1);
      this.newEcuesta.id = this.nextId;

    });
  }
    back(){
      this.router.navigate(['/encuestas']);
    }

  
}

  