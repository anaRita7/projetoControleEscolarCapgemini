import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatriculaListarComponent } from './matricula-listar/matricula-listar.component';
import { MatriculaCadastrarComponent } from './matricula-cadastrar/matricula-cadastrar.component';
import { ProfessorCadastrarComponent } from './professor-cadastrar/professor-cadastrar.component';

@NgModule({
  declarations: [
    AppComponent,
    MatriculaListarComponent,
    MatriculaCadastrarComponent,
    ProfessorCadastrarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
