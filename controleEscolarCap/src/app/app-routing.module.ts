import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlunoComponent } from './aluno/aluno.component';
import { MatriculaComponent } from './matricula/matricula.component';
import { ProfessorComponent } from './professor/professor.component';

const routes: Routes = [
  {path: 'aluno', component: AlunoComponent},
  {path: 'professor', component: ProfessorComponent},
  {path: 'matricula', component: MatriculaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
