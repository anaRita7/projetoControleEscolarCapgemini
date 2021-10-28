import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatriculaCadastrarComponent } from './matricula-cadastrar/matricula-cadastrar.component';
import { MatriculaListarComponent } from './matricula-listar/matricula-listar.component';
import { NotasListarTurmaComponent } from './notas-listar-turma/notas-listar-turma.component';
import { ProfessorCadastrarComponent } from './professor-cadastrar/professor-cadastrar.component';

const routes: Routes = [
  {path: 'professor-cadastrar', component: ProfessorCadastrarComponent},
  {path: 'matricula-cadastrar', component: MatriculaCadastrarComponent},
  {path: 'matricula-listar', component: MatriculaListarComponent},
  {path: 'notas-listar-turma', component: NotasListarTurmaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
