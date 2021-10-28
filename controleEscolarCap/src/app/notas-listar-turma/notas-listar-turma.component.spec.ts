import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotasListarTurmaComponent } from './notas-listar-turma.component';

describe('NotasListarTurmaComponent', () => {
  let component: NotasListarTurmaComponent;
  let fixture: ComponentFixture<NotasListarTurmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotasListarTurmaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotasListarTurmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
