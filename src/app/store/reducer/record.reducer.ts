
import { ActionsUnion, ActionTypes } from '../action/record.actions';

export const initialState: any = {
    records: []
  };

export function RecordReducer(state = initialState, action: ActionsUnion) {
    switch (action.type) {
      case ActionTypes.LoadSuccess:
         return {
            ...state,
            records: [...state.records, ...action.payload]
        };
      default:
        return state;
    }
}
