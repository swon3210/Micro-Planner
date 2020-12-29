import { useSelector, useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { RootState } from '../modules';
import { Day, Plan } from '../apis/plan';
import {
  setFinalGoal,
  setSemiGoal,
  setAssignedPlace,
  setAssignedStartTime,
  setAssignedEndTime,
  setAssignedDays,
  setProgress,
  setPeriod,
  addPlan,
  setAllPlan,
} from '../modules/plan/actions';
import offlineDB from '../db/indexedDB';

export const usePlanState = () => {
  const { data, currentData } = useSelector((state: RootState) => state.plan);

  return {
    data,
    currentData,
  };
};

export const usePlanAction = () => {
  const dispatch = useDispatch();

  const setFinalGoalAction = useCallback(
    (payload: string) => {
      return dispatch(setFinalGoal(payload));
    },
    [dispatch]
  );

  const setSemiGoalAction = useCallback(
    (payload: string) => {
      return dispatch(setSemiGoal(payload));
    },
    [dispatch]
  );

  const setAssignedStartTimeAction = useCallback(
    (payload: string) => {
      return dispatch(setAssignedStartTime(payload));
    },
    [dispatch]
  );

  const setAssignedEndTimeAction = useCallback(
    (payload: string) => {
      return dispatch(setAssignedEndTime(payload));
    },
    [dispatch]
  );

  const setAssignedPlaceAction = useCallback(
    (payload: string) => {
      return dispatch(setAssignedPlace(payload));
    },
    [dispatch]
  );

  const setAssignedDaysAction = useCallback(
    (payload: Day[]) => {
      return dispatch(setAssignedDays(payload));
    },
    [dispatch]
  );

  const setProgressAction = useCallback(
    (payload: number) => {
      return dispatch(setProgress(payload));
    },
    [dispatch]
  );

  const setPeriodAction = useCallback(
    (payload: number) => {
      return dispatch(setPeriod(payload));
    },
    [dispatch]
  );

  const addPlanAction = useCallback(
    (payload: Plan) => {
      offlineDB.addPlan(payload);
      return dispatch(addPlan(payload));
    },
    [dispatch]
  );

  const getAllPlanAction = useCallback(async () => {
    const allPlans = await offlineDB.getAllPlans();
    return dispatch(setAllPlan(allPlans));
  }, [dispatch]);

  return {
    setFinalGoalAction,
    setSemiGoalAction,
    setAssignedStartTimeAction,
    setAssignedEndTimeAction,
    setAssignedPlaceAction,
    setAssignedDaysAction,
    setProgressAction,
    setPeriodAction,
    addPlanAction,
    getAllPlanAction,
  };
};
