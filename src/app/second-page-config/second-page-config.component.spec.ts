import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondPageConfigComponent } from './second-page-config.component';

describe('SecondPageConfigComponent', () => {
  let component: SecondPageConfigComponent;
  let fixture: ComponentFixture<SecondPageConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondPageConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondPageConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
