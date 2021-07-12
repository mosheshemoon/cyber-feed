import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveDataDialogComponent } from './save-data-dialog.component';

describe('ExtraDataDialogComponent', () => {
  let component: SaveDataDialogComponent;
  let fixture: ComponentFixture<SaveDataDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveDataDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveDataDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
