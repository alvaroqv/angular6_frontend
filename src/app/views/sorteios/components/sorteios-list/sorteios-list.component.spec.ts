import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SorteiosListComponent } from './sorteios-list.component';

describe('SorteiosListComponent', () => {
  let component: SorteiosListComponent;
  let fixture: ComponentFixture<SorteiosListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SorteiosListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SorteiosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
