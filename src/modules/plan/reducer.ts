import { createReducer } from 'typesafe-actions';
import { PlanState, PlanAction } from './types';
import {
  SET_PERIOD,
  SET_ASSIGNED_DAYS,
  SET_FINAL_GOAL,
  SET_ASSIGNED_TIME,
  SET_ASSIGNED_PLACE,
  SET_PROGRESS,
  SET_SEMI_GOAL,
  ADD_PLAN,
  SET_ALL_PLAN
} from './actions';

const initialState: PlanState = {
  error: null,
  loading: false,
  data: [],
  currentData: {
    // id 가 '' 라는 것은 온라인 동기화가 이루어지지 않았다는 뜻이다.
    id: null,
    userId: '',
    finalGoal: '',
    semiGoal: '',
    assignedTime: 0,
    assignedPlace: '',
    assignedDays: [],
    timestamp: 0,
    progress: 0,
    period: 1,
  }
};

// 맞다 배열이어야 하지

const plan = createReducer<PlanState, PlanAction>(initialState, {
  [SET_FINAL_GOAL]: (state, action) => {
    const processed = { ...state };
    processed.currentData.finalGoal = action.payload;
    return processed;
  },
  [SET_SEMI_GOAL]: (state, action) => {
    const processed = { ...state };
    processed.currentData.semiGoal = action.payload;
    return processed;
  },
  [SET_ASSIGNED_TIME]: (state, action) => {
    const processed = { ...state };
    processed.currentData.assignedTime = action.payload;
    return processed;
  },
  [SET_ASSIGNED_PLACE]: (state, action) => {
    const processed = { ...state };
    processed.currentData.assignedPlace = action.payload;
    return processed;
  },
  [SET_ASSIGNED_DAYS]: (state, action) => {
    const processed = { ...state };
    processed.currentData.assignedDays = action.payload;
    return processed;
  },
  [SET_PROGRESS]: (state, action) => {
    const processed = { ...state };
    processed.currentData.progress = action.payload;
    return processed;
  },
  [SET_PERIOD]: (state, action) => {
    const processed = { ...state };
    processed.currentData.period = action.payload;
    return processed;
  },
  [ADD_PLAN]: (state, action) => {
    const processed = { ...state };
    const timestamp = new Date().getTime();
    processed.currentData.id = timestamp;
    processed.currentData.timestamp = timestamp;
    action.payload.id = timestamp;
    action.payload.timestamp = timestamp;
    processed.data.push(action.payload);
    return processed;
  },
  [SET_ALL_PLAN]: (state, action) => {
    const processed = { ...state };
    processed.data = action.payload;
    return processed;
  }
});

export default plan;
