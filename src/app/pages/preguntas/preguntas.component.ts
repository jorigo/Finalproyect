import { Component, OnInit } from "@angular/core";
import { PreguntasService } from "../../services/preguntas.service";
import { PreguntasModel } from "../../models/preguntasModel";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";


@Component({
  selector: "app-preguntas",
  standalone: true,
  imports: [ RouterModule, CommonModule, FormsModule],
  templateUrl: "./preguntas.component.html",
  styleUrl: "./preguntas.component.sass"
})
export class PreguntasComponent implements OnInit {
public preguntasList: PreguntasModel [] = [];
string: any;


  constructor(private preguntasService: PreguntasService) {
  }
  ngOnInit() {
    this.preguntasService.getpregunta().subscribe((res: any) => {
      console.log(res);
      this.preguntasList = res;
  
    });
  }
  deleteEncuestas(id: string) {
    this.preguntasList = this.preguntasList.filter((Preguntas:  PreguntasModel ) => Preguntas.id !== id.toString());
  }
}
