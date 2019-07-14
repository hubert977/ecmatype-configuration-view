import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstPageConfigComponent } from './first-page-config.component';

describe('FirstPageConfigComponent', () => {
  let component: FirstPageConfigComponent;
  let fixture: ComponentFixture<FirstPageConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstPageConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstPageConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
