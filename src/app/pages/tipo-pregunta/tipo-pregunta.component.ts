import { Component, OnInit } from "@angular/core";
import { TipoPreguntaModel } from "../../models/tipo-preguntaModel";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { TipoPreguntaService } from "../../services/tipo-pregunta.service";


@Component({
  selector: "app-tipo-pregunta",
  standalone: true,
  imports: [ RouterModule, CommonModule, FormsModule],
templateUrl: "./tipo-pregunta.component.html",
  styleUrls: ["./tipo-pregunta.component.sass"]
})
export class TipoPreguntaComponent implements OnInit {
public tipoPreguntaList: TipoPreguntaModel [] = [];
string: any;


  constructor(private tipopreguntaService: TipoPreguntaService) {
  }
  ngOnInit() {
    this.tipopreguntaService.gettipopregunta().subscribe((res: any) => {
      console.log(res);
      this.tipoPreguntaList = res;
  
    });
  }
  deleteEncuestas(id: string) {
    this.tipoPreguntaList = this.tipoPreguntaList.filter((TipoPreguntaModel: TipoPreguntaModel) => TipoPreguntaModel.id !== id.toString());
  }
}
