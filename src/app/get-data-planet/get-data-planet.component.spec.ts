import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetDataPlanetComponent } from './get-data-planet.component';

describe('GetDataPlanetComponent', () => {
  let component: GetDataPlanetComponent;
  let fixture: ComponentFixture<GetDataPlanetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetDataPlanetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetDataPlanetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
