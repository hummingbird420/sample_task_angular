import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorCreatePage } from './doctor-create.page';

describe('DoctorCreatePage', () => {
  let component: DoctorCreatePage;
  let fixture: ComponentFixture<DoctorCreatePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoctorCreatePage]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DoctorCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
