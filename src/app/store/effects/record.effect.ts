import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, map, mergeMap, debounceTime } from 'rxjs/operators';
import { ActionTypes } from '../action/record.actions';
import { RecordService } from '../../shared/service/record.service';

@Injectable()
export class RecordEffects {
    constructor(
        private actions$: Actions,
        private recordService: RecordService
    ) { }

    @Effect()
      getRecords$ = this.actions$.pipe(
        ofType(ActionTypes.LOAD_DATA),
        debounceTime(400),
        mergeMap(({ payload: { cursor, limit } }) =>
          this.recordService.getRecords(cursor, limit).pipe(
            map(records => {
              return { type: ActionTypes.LoadSuccess, payload: records };
            }),
            catchError(() => EMPTY)
          )
        )
      );
}
