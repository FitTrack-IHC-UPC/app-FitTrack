import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxCheckedRadioComponent } from './box-checked-radio.component';

describe('BoxCheckedRadioComponent', () => {
  let component: BoxCheckedRadioComponent;
  let fixture: ComponentFixture<BoxCheckedRadioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoxCheckedRadioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoxCheckedRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
