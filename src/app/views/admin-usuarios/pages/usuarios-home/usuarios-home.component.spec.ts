import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariosHomeComponent } from './usuarios-home.component';

describe('UsuariosHomeComponent', () => {
  let component: UsuariosHomeComponent;
  let fixture: ComponentFixture<UsuariosHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuariosHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuariosHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
