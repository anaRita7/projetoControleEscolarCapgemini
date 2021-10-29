import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorAlterarComponent } from './professor-alterar.component';

describe('ProfessorAlterarComponent', () => {
  let component: ProfessorAlterarComponent;
  let fixture: ComponentFixture<ProfessorAlterarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessorAlterarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessorAlterarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
