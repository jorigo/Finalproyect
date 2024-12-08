import { Component, OnInit } from "@angular/core";
import { EncuestasService } from "../../services/encuestas.service";
import { EncuestaModel } from "../../models/encuestaModel";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";


@Component({
  selector: "app-encuestas",
  standalone: true,
  imports: [ RouterModule, CommonModule, FormsModule],
  templateUrl: "./encuestas.component.html",
  styleUrl: "./encuestas.component.sass"
})
export class EncuestasComponent implements OnInit {
public encuestasList: EncuestaModel [] = [];
string: any;


  constructor(private encuestasService: EncuestasService) {
  }
  ngOnInit() {
    this.encuestasService.getencuesta().subscribe((res: any) => {
      console.log(res);
      this.encuestasList = res;
  
    });
  }
  deleteEncuestas(id: string) {
    this.encuestasList = this.encuestasList.filter((Encuestas:  EncuestaModel ) => Encuestas.id !== id.toString());
  }
}