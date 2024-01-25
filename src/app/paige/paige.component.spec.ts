import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaigeComponent } from './paige.component';

describe('PaigeComponent', () => {
  let component: PaigeComponent;
  let fixture: ComponentFixture<PaigeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaigeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaigeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
