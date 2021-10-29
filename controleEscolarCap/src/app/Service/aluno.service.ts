import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Aluno } from '../Model/Aluno';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  constructor(private http:HttpClient) {}

  Url='http://localhost:8080/api/aluno';

  getAluno(){
    return this.http.get<Aluno[]>(this.Url);
  }
}
