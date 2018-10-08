import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SorteiosDetailComponent } from './sorteios-detail.component';

describe('SorteiosDetailComponent', () => {
  let component: SorteiosDetailComponent;
  let fixture: ComponentFixture<SorteiosDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SorteiosDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SorteiosDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
