import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotasListarAlunoComponent } from './notas-listar-aluno.component';

describe('NotasListarAlunoComponent', () => {
  let component: NotasListarAlunoComponent;
  let fixture: ComponentFixture<NotasListarAlunoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotasListarAlunoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotasListarAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
