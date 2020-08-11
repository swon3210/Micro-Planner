import { createAction } from "typesafe-actions";

// 액션 타입
export const SET_LAYOUT_BUTTON_FUNC = "layout/SET_LAYOUT_BUTTON_FUNC";

// 액션 생성 함수
export const setLayoutButtonFunc = createAction(
  SET_LAYOUT_BUTTON_FUNC
)<(() => void) | undefined>();

