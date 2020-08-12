import { createAction } from "typesafe-actions";
import { Day, Plan } from '../../apis/plan';

// 액션 타입
export const SET_FINAL_GOAL = "plan/SET_FINAL_GOAL";
export const SET_SEMI_GOAL = "plan/SET_SEMI_GOAL";
export const SET_ASSIGNED_TIME = "plan/SET_ASSIGNED_TIME";
export const SET_ASSIGNED_PLACE = "plan/SET_ASSIGNED_PLACE";
export const SET_ASSIGNED_DAYS = "plan/SET_ASSIGNED_DAYS";
export const SET_PROGRESS = "plan/PROGRESS"
export const SET_PERIOD = "plan/SET_PERIOD";
export const ADD_PLAN = "plan/ADD_PLAN"
export const SET_ALL_PLAN = "plan/GET_ALL_PLAN";
export const CONVERT_ACTION = "plan/CONVERT_ACTION";

// 액션 생성 함수
export const setFinalGoal = createAction(
  SET_FINAL_GOAL
)<string>();
export const setSemiGoal = createAction(
  SET_SEMI_GOAL
)<string>();
export const setAssignedTime = createAction(
  SET_ASSIGNED_TIME
)<number>();
export const setAssignedPlace = createAction(
  SET_ASSIGNED_PLACE
)<string>();
export const setAssignedDays = createAction(
  SET_ASSIGNED_DAYS
)<Day[]>();
export const setProgress = createAction(
  SET_PROGRESS
)<number>();
export const setPeriod = createAction(
  SET_PERIOD
)<number>();
export const addPlan = createAction(
  ADD_PLAN
)<Plan>();
export const setAllPlan = createAction(
  SET_ALL_PLAN
)<Plan[]>();

