import * as actions from './actions';
import { ActionType } from 'typesafe-actions';

export interface LayoutState {
  buttonFunc: undefined | (() => void);
}

export type LayoutAction = ActionType<typeof actions>;

