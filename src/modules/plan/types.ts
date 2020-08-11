import * as actions from './actions';
import { ActionType } from 'typesafe-actions';
import { Plan } from '../../apis/plan';

export interface PlanState {
  loading: boolean;
  error: Error | null;
  data: Plan[];
  currentData: Plan;
}

export type PlanAction = ActionType<typeof actions>;

