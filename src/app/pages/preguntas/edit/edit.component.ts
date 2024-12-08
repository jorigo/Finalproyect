import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PreguntasService } from './../../../services/preguntas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.sass']
})
export class EditComponent implements OnInit {
  item: any = { id: '', argumento: '', idpregunta: '' };

  constructor(private preguntasService: PreguntasService, 
    private router: Router, 
    private route: ActivatedRoute) {}

    ngOnInit(): void {
      const id = this.route.snapshot.paramMap.get('id')!;
      this.preguntasService.getById(id).subscribe(data => {
        this.item = data;
      });
    }
  
    update(): void {
      this.preguntasService.update(this.item.id, this.item).subscribe(() => {
        alert('Registro actualizado exitosamente.');
        this.router.navigate(['/preguntas']);
      });
    }
  
    back(): void {
      this.router.navigate(['/preguntas']);
    }
}