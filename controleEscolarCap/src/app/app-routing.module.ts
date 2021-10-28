import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarAlunoComponent } from './aluno/cadastrar-aluno/cadastrar-aluno.component';
import { ListarMatriculasComponent } from './listar-matriculas/listar-matriculas.component';
import { MatriculaComponent } from './matricula/matricula.component';
import { ProfessorComponent } from './professor/professor.component';

const routes: Routes = [
  { path: 'cadastrar-aluno', component: CadastrarAlunoComponent },
  { path: 'professor', component: ProfessorComponent },
  { path: 'matricula', component: MatriculaComponent },
  { path: 'listar-matriculas', component: ListarMatriculasComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
