import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { TestBed, async } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RecordEffects } from './record.effect';
import * as fromActions from '../action/record.actions';
import { RecordService } from '../../shared/service/record.service';

describe('Store > Data > RecordEffect', () => {
    let actions$: Observable<Action>;
    let effects: RecordEffects;
    let RecordService;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
          imports: [HttpClientTestingModule],
          providers: [
            RecordEffects,
            provideMockStore(),
            provideMockActions(() => actions$),
            {
              provide: RecordService,
              useValue: jasmine.createSpyObj('RecordService', ['getRecords'])
            }
          ],
        });
    
        effects = TestBed.get<RecordEffects>(RecordEffects);
        RecordService = TestBed.get<RecordService>(RecordService);
      }));

      it('SHOULD dispatch LoadItems action WHEN LoadData action is dispatched', () => {
        const data: any = [];
        RecordService.getRecords.and.returnValue(of(data));
    
        actions$ = of({ type: fromActions.ActionTypes.LOAD_DATA });
    
        effects.getRecords$.subscribe(action => {
          expect(action.type).toBe(fromActions.ActionTypes.LoadSuccess);
          expect(action.payload).toEqual(!!data);
        });
      });
});