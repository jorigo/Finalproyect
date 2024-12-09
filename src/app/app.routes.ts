import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { EncuestasComponent } from './pages/encuestas/encuestas.component';
import { NgModule } from '@angular/core';
import { EditComponent as EditPreguntaComponent } from './pages/preguntas/edit/edit.component';
import { EditComponent as EditTipoPreguntaComponent } from './pages/tipo-pregunta/edit/edit.component';
import { EditComponent as EditEncuestaComponent } from './pages/encuestas/edit/edit.component';
import { PreguntasComponent } from './pages/preguntas/preguntas.component';
import { TipopreguntaComponent } from './pages/tipo-pregunta/tipo-pregunta.component';
import { AddComponent as AddEncuestaComponent } from './pages/encuestas/add/add.component';
import { AddComponent as AddPreguntaComponent } from './pages/preguntas/add/add.component';
import { AddComponent as AddTipoPreguntaComponent } from './pages/tipo-pregunta/add/add.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'encuestas', component: EncuestasComponent },
  { path: 'encuestas/edit/:id', component: EditEncuestaComponent },
  { path: 'encuestas/add', component: AddEncuestaComponent },
  { path: 'preguntas/add', component: AddPreguntaComponent },
  { path: 'tipo-pregunta/add', component: AddTipoPreguntaComponent },
  { path: 'preguntas', component: PreguntasComponent },
  { path: 'preguntas/edit/:id', component: EditPreguntaComponent },
  { path: 'tipo-pregunta', component: TipopreguntaComponent },
  { path: 'tipo-pregunta/edit/:id', component: EditTipoPreguntaComponent },
    { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 