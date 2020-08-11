import { useSelector, useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { RootState } from '../modules';
import {
  setLayoutButtonFunc
} from '../modules/layout/actions';

export const useLayoutState = () => {
  const { buttonFunc } = useSelector((state: RootState) => state.layout);

  return {
    buttonFunc
  };
};

export const useLayoutAction = () => {
  const dispatch = useDispatch();

  const setLayoutButtonFuncAction = useCallback(
    (payload: (() => void) | undefined) => {
      return dispatch(setLayoutButtonFunc(payload));
    },
    [dispatch]
  );

  return {
    setLayoutButtonFuncAction
  };
};
