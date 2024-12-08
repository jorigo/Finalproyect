import { Component, OnInit } from "@angular/core";
import { PreguntasService } from "../../services/preguntas.service";
import { PreguntasModel } from "../../models/preguntasModel";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Router } from "@angular/router";

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


  constructor(private preguntasService: PreguntasService, private router: Router) {
  }
  ngOnInit() {
    this.preguntasService.getpreguntas().subscribe((res: any) => {
      console.log(res);
      this.preguntasList = res;
  
    });
  }
  deletePreguntas(id: string) {
    this.preguntasList = this.preguntasList.filter((Preguntas:  PreguntasModel ) => Preguntas.id !== id);
    this.preguntasService.deletePreguntas(id).subscribe();
     
  }

  back(){
    this.router.navigate(['/home']);
  }
}
