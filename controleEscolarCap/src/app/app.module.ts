import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfessorComponent } from './professor/professor.component';
import { AlunoComponent } from './aluno/aluno.component';
import { MatriculaComponent } from './matricula/matricula.component';
import { ListarMatriculasComponent } from './listar-matriculas/listar-matriculas.component';
import { CadastrarAlunoComponent } from './aluno/cadastrar-aluno/cadastrar-aluno.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfessorComponent,
    AlunoComponent,
    MatriculaComponent,
    ListarMatriculasComponent,
    CadastrarAlunoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
