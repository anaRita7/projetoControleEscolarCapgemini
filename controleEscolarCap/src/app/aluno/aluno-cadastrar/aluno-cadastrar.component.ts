import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aluno-cadastrar',
  templateUrl: './aluno-cadastrar.component.html',
  styleUrls: ['./aluno-cadastrar.component.css']
})
export class AlunoCadastrarComponent implements OnInit {

  eMatriculado: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
