import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add.component.html',
  styleUrl: './add.component.sass'
})
export class AddComponent {
  item = {

    nombre: ''

}
constructor() { }

save() {

  // Add your save logic here

  console.log('Form submitted', this.item);
}

}