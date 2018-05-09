
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeansoftNavComponent } from './leansoft-nav.component';

describe('LeansoftNavComponent', () => {
  let component: LeansoftNavComponent;
  let fixture: ComponentFixture<LeansoftNavComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LeansoftNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeansoftNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
