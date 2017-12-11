import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupHomePageComponent } from './setup-home-page.component';

describe('SetupHomePageComponent', () => {
  let component: SetupHomePageComponent;
  let fixture: ComponentFixture<SetupHomePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetupHomePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
