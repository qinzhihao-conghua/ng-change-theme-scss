import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZhFontComponent } from './zh-font.component';

describe('ZhFontComponent', () => {
  let component: ZhFontComponent;
  let fixture: ComponentFixture<ZhFontComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZhFontComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZhFontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
