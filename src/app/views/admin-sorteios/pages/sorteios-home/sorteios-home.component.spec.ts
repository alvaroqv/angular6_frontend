import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SorteiosHomeComponent } from './sorteios-home.component';

describe('SorteiosHomeComponent', () => {
  let component: SorteiosHomeComponent;
  let fixture: ComponentFixture<SorteiosHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SorteiosHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SorteiosHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
