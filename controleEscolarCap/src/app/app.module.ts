import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatriculaListarComponent } from './matricula-listar/matricula-listar.component';
import { MatriculaCadastrarComponent } from './matricula-cadastrar/matricula-cadastrar.component';
import { ProfessorCadastrarComponent } from './professor-cadastrar/professor-cadastrar.component';
import { ProfessorListarComponent } from './professor-listar/professor-listar.component';
import { ProfessorAlterarComponent } from './professor-alterar/professor-alterar.component';
import { DisciplinaAlterarComponent } from './disciplina-alterar/disciplina-alterar.component';
import { DisciplinaCadastrarComponent } from './disciplina-cadastrar/disciplina-cadastrar.component';
import { DisciplinaListarComponent } from './disciplina-listar/disciplina-listar.component';
import { AlunoListarComponent } from './aluno/aluno-listar/aluno-listar.component';
import { AlunoCadastrarComponent } from './aluno/aluno-cadastrar/aluno-cadastrar.component';
import { AlunoAlterarComponent } from './aluno/aluno-alterar/aluno-alterar.component';
import { NotasListarAlunoComponent } from './notas-listar-aluno/notas-listar-aluno.component';
import { NotasListarTurmaComponent } from './notas-listar-turma/notas-listar-turma.component';

@NgModule({
  declarations: [
    AppComponent,
    MatriculaListarComponent,
    MatriculaCadastrarComponent,
    ProfessorCadastrarComponent,
    ProfessorListarComponent,
    ProfessorAlterarComponent,
    DisciplinaAlterarComponent,
    DisciplinaCadastrarComponent,
    DisciplinaListarComponent,
    AlunoListarComponent,
    AlunoCadastrarComponent,
    AlunoAlterarComponent,
    NotasListarAlunoComponent,
    NotasListarTurmaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
