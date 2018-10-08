import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SorteiosFormComponent } from './sorteios-form.component';

describe('SorteiosFormComponent', () => {
  let component: SorteiosFormComponent;
  let fixture: ComponentFixture<SorteiosFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SorteiosFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SorteiosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
