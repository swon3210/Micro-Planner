import { createReducer } from 'typesafe-actions';
import { LayoutState, LayoutAction } from './types';
import { SET_LAYOUT_BUTTON_FUNC } from './actions';

const initialState: LayoutState = {
  buttonFunc: undefined
};

// 맞다 배열이어야 하지

const layout = createReducer<LayoutState, LayoutAction>(initialState, {
  [SET_LAYOUT_BUTTON_FUNC]: (state, action) => {
    const processed = { ...state };
    processed.buttonFunc = action.payload;
    return processed;
  },
});

export default layout;
