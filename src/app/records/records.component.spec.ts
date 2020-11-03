import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordsComponent } from './records.component';
import { StoreModule } from '@ngrx/store';
import { RecordReducer } from '../store/reducer/record.reducer';

describe('RecordsComponent', () => {
  let component: RecordsComponent;
  let fixture: ComponentFixture<RecordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({ record: RecordReducer }),
      ],
      declarations: [ RecordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
