import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { EncuestasComponent } from './pages/encuestas/encuestas.component';
import { AddComponent} from './pages/encuestas/add/add.component';
import { EditComponent} from './pages/encuestas/edit/edit.component';
import { PreguntasComponent} from './pages/preguntas/preguntas.component';
import { AddComponent as PreguntasAddComponent} from './pages/preguntas/add/add.component';
import { EditComponent as PreguntasEditComponent} from './pages/preguntas/edit/edit.component';
import { TipoPreguntaComponent } from './pages/tipo-pregunta/tipo-pregunta.component';
import { AddComponent as TipoPreguntaAddComponent} from './pages/tipo-pregunta/add/add.component';
import { EditComponent as TipoPreguntaEditComponent} from './pages/tipo-pregunta/edit/edit.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'encuestas', component: EncuestasComponent },
  { path: 'encuestas/add', component: AddComponent},
  { path: 'encuestas/edit/:id', component: EditComponent },
  { path: 'preguntas', component: PreguntasComponent },
  { path: 'preguntas/add', component: PreguntasAddComponent },
  { path: 'preguntas/edit/:id', component: PreguntasEditComponent },
  { path: 'tipo-pregunta', component: TipoPreguntaComponent },
  { path: 'tipo-pregunta/add', component: TipoPreguntaAddComponent },
  { path: 'tipo-pregunta/edit/:id', component: TipoPreguntaEditComponent },
  { path : "encuestas", component: EncuestasComponent},
    { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 