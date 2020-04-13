import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DupComponent } from './dup.component';

describe('DupComponent', () => {
  let component: DupComponent;
  let fixture: ComponentFixture<DupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
