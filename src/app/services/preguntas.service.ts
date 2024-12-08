import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PreguntasService {
  private baseUrl = 'http://localhost:3000/preguntas';
  constructor(private http: HttpClient) {
    
   }
    getpregunta() {
      return this.http.get('http://localhost:3000/');
} 
//Uso este metodo para mantener la coherencia con el nombre de la tabla en la base de datos
getById(id: any){
  return this.http.get(`http://localhost:3000/preguntas/${id}`);
}

postPreguntas(Encuestas: any){

  return this.http.post('http://localhost:3000/preguntas', Encuestas);
}
deletePreguntas(id: any){
  return this.http.delete(`http://localhost:3000/preguntas/${id}`);

}

update(id: string, data: any): Observable<any> {
  return this.http.put(`${this.baseUrl}/${id}`, data);
}


}