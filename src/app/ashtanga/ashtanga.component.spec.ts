import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AshtangaComponent } from './ashtanga.component';

describe('AshtangaComponent', () => {
  let component: AshtangaComponent;
  let fixture: ComponentFixture<AshtangaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AshtangaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AshtangaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
