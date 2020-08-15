import { useSelector, useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { RootState } from '../modules';
import { Day, Plan } from '../apis/plan';
import {
  setFinalGoal,
  setSemiGoal,
  setAssignedPlace,
  setAssignedTime,
  setAssignedDays,
  setProgress,
  setPeriod,
  addPlan,
  setAllPlan
} from '../modules/plan/actions';
import { createPlanObject, readAllPlanObjects } from '../db/indexedDB';

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

  const setAssignedTimeAction = useCallback(
    (payload: string) => {
      return dispatch(setAssignedTime(payload));
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
      dispatch(addPlan(payload));
      return createPlanObject(payload);
    },
    [dispatch]
  );

  const getAllPlanAction = useCallback(() => {
    const request = window.indexedDB.open('planDatabase', 1);
    let db;
    request.onsuccess = function (event) {
      db = request.result;
      const transaction = db.transaction('planStore', 'readwrite');
      const store = transaction.objectStore('planStore');
      const readAllRequest = store.getAll();
      readAllRequest.onerror = function (error) {
        console.log('error : ', (error.target as any).error);
      };
      readAllRequest.onsuccess = function (event) {
        const result = (event.target as any).result;
        console.log('result : ', result);
        return dispatch(setAllPlan(result));
      };
    };
    request.onerror = function (error) {
      console.log('에러 발생 : ', (error.target as any).error);
    };
    // return dispatch(setAllPlan(allPlan));
  }, [dispatch]);

  return {
    setFinalGoalAction,
    setSemiGoalAction,
    setAssignedTimeAction,
    setAssignedPlaceAction,
    setAssignedDaysAction,
    setProgressAction,
    setPeriodAction,
    addPlanAction,
    getAllPlanAction
  };
};
