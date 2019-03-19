import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedfirstComponent } from './nestedfirst.component';

describe('NestedfirstComponent', () => {
  let component: NestedfirstComponent;
  let fixture: ComponentFixture<NestedfirstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NestedfirstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NestedfirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
