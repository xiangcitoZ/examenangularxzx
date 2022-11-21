import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcacuboComponent } from './marcacubo.component';

describe('MarcacuboComponent', () => {
  let component: MarcacuboComponent;
  let fixture: ComponentFixture<MarcacuboComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarcacuboComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarcacuboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
