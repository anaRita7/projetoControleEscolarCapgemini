import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Aluno } from 'src/app/Model/Aluno';
import { ServiceService } from '../../Service/service.service'

@Component({
  selector: 'app-aluno-listar',
  templateUrl: './aluno-listar.component.html',
  styleUrls: ['./aluno-listar.component.css']
})


export class AlunoListarComponent implements OnInit {

  alunos: Aluno[] = [];

  constructor(private service:ServiceService, private router:Router) {}

  ngOnInit() : void {
    this.service.getAluno()
    .subscribe(data => {
      this.alunos = data;
      console.log(data);
    })
  }

}
