import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PreguntasService } from './../../../services/preguntas.service';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.sass']

})
export class EditComponent implements OnInit {
  item: any = { id: null, nombre: '' };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    @Inject(PreguntasService) private preguntasService: PreguntasService
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.item = this.preguntasService.getById(id) || { id: null, nombre: '' };
  }

  update(): void {
    if (this.item.id) {
      this.preguntasService.update(this.item.id, this.item);
      alert('Registro actualizado exitosamente.');
      this.router.navigate(['/encuestas']);
    }
  }

  cancel(): void {
    this.router.navigate(['/encuestas']);
  }
}
