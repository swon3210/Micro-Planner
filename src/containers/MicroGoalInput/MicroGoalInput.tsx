import React, { useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './MicroGoalInput.module.scss';
import {
  ExtraBoldHeading,
  BoldSpan,
  Paragraph,
} from '../../elements/Text/Text';
import InputBox, { InputObj } from '../../components/InputBox/InputBox';

// Hooks
import { useLayoutAction } from '../../hooks/layout';
import { usePlanAction, usePlanState } from '../../hooks/plan';

const cx = classNames.bind(styles);

export interface MicroGoalInputProps {
  className?: string;
}

const MicroGoalInput = ({ className }: MicroGoalInputProps) => {
  
  const layoutAction = useLayoutAction();
  const planAction = usePlanAction();
  const planState = usePlanState();
  // const time = planState.currentData.assignedTime;
  const place = planState.currentData.assignedPlace;


  useEffect(() => {
    if (place.length !== 0) {
      layoutAction.setLayoutButtonFuncAction(() => {
        // planAction.setAssignedTimeAction(time);
        planAction.setAssignedPlaceAction(place);
      });
    } else {
      layoutAction.setLayoutButtonFuncAction(undefined);
    }
  }, [place]);

  // const dummyInputItems = ["저녁 9시", "내방 책상에서"]
  const dummyInputItems: InputObj[] = [
    // { id: 1, text: "저녁 9시", onChangeHandler: planAction.setAssignedTimeAction},
    { id: 2, text: place, onChangeHandler: planAction.setAssignedPlaceAction},
  ]
  
  return (
    <div className={cx('micro-goal-input', className)}>
      <ExtraBoldHeading className={cx('heading')}>micro goal</ExtraBoldHeading>
      <Paragraph className={cx('guideline')}>
        행동패턴을<BoldSpan>꾸준히 반복</BoldSpan>할 수 있도록<br />
        <BoldSpan>시간과 장소를</BoldSpan>부여해주세요
      </Paragraph>
      <InputBox className={cx('plan-input')} inputItems={dummyInputItems} />
    </div>
  );
};

export default MicroGoalInput;
