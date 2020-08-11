import { combineReducers } from 'redux';

// Reducers
import plan from './plan';
import layout from './layout';

// Root Reducer
const rootReducer = combineReducers({
  plan,
  layout
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;

