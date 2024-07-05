import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenreRandomComponent } from './genre-random.component';

describe('GenreRandomComponent', () => {
  let component: GenreRandomComponent;
  let fixture: ComponentFixture<GenreRandomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenreRandomComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GenreRandomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
