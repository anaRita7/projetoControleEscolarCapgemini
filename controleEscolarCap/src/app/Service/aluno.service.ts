import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Aluno } from '../Model/Aluno';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  constructor(private http:HttpClient) {}

  Url='http://localhost:8080/api/aluno';

  getAlunos(): Observable<any>{
    return this.http.get<Aluno[]>(this.Url + "/all");
  }

  getAluno(id: string): Observable<any>{
    return this.http.get<Aluno>(this.Url + id);
  }

  saveAluno(aluno: Aluno): Observable<any>{
    return this.http.post<Aluno>(this.Url, aluno);
  }

  editAluno(id: String, aluno: Aluno): Observable<any>{
    return this.http.put(this.Url + id, aluno);
  }

  deleteCategory(id: String): Observable<any>{
    return this.http.delete(this.Url + id);
  }

}
