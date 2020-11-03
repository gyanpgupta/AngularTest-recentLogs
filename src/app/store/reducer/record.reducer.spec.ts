import * as fromReducer from './record.reducer';
import * as fromActions from '../action/record.actions';

describe('Store > Data > RecordReducer', () => {
    afterEach(() => {
      fromReducer.initialState.data = null;
    });

    it('should load data', () => {
        const { initialState } = fromReducer;
        const payload: any = [];
        const action = new fromActions.LoadItems(payload);
        const state = fromReducer.RecordReducer(initialState, action);
    
        expect(state.data).toEqual(payload.records);
    });
});