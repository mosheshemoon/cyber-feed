import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CyberCardComponent } from './cyber-card.component';

describe('WeatherItemComponent', () => {
  let component: CyberCardComponent;
  let fixture: ComponentFixture<CyberCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CyberCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CyberCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
