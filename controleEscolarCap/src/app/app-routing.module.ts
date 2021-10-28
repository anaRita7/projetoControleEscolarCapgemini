import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatriculaCadastrarComponent } from './matricula-cadastrar/matricula-cadastrar.component';
import { MatriculaListarComponent } from './matricula-listar/matricula-listar.component';
import { NotasListarAlunoComponent } from './notas-listar-aluno/notas-listar-aluno.component';
import { NotasListarTurmaComponent } from './notas-listar-turma/notas-listar-turma.component';
import { ProfessorCadastrarComponent } from './professor-cadastrar/professor-cadastrar.component';
import { DisciplinaCadastrarComponent } from './disciplina-cadastrar/disciplina-cadastrar.component';
import { DisciplinaListarComponent } from './disciplina-listar/disciplina-listar.component';

const routes: Routes = [
  {path: 'professor-cadastrar', component: ProfessorCadastrarComponent},
  {path: 'matricula-cadastrar', component: MatriculaCadastrarComponent},
  {path: 'matricula-listar', component: MatriculaListarComponent},
  {path: 'notas-listar-turma', component: NotasListarTurmaComponent},
  {path: 'notas-listar-aluno', component: NotasListarAlunoComponent},
  {path: 'disciplina-cadastrar', component: DisciplinaCadastrarComponent},
  {path: 'disciplina-listar', component: DisciplinaListarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
