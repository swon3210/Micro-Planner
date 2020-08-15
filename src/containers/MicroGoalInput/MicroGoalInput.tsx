import React, { useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './MicroGoalInput.module.scss';
import {
  ExtraBoldHeading,
  BoldSpan,
  Paragraph,
} from '../../elements/Text/Text';
import { TimeInput } from '../../elements/Input/Input';
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

  useEffect(() => {
    if (planState.currentData.assignedPlace.length !== 0) {
      layoutAction.setLayoutButtonFuncAction(() => {
        planAction.setAssignedPlaceAction(planState.currentData.assignedPlace);
        planAction.setAssignedTimeAction(planState.currentData.assignedTime);
      });
    } else {
      layoutAction.setLayoutButtonFuncAction(undefined);
    }
  }, [planState.currentData.assignedPlace]);

  const items: InputObj[] = [
    { id: 2, text: planState.currentData.assignedPlace, onChangeHandler: planAction.setAssignedPlaceAction},
  ];

  const onTimeChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;
    planAction.setAssignedTimeAction(value);
    console.log('value', value);
  }
  
  return (
    <div className={cx('micro-goal-input', className)}>
      <ExtraBoldHeading className={cx('heading')}>micro goal</ExtraBoldHeading>
      <Paragraph className={cx('guideline')}>
        행동패턴을<BoldSpan>꾸준히 반복</BoldSpan>할 수 있도록<br />
        <BoldSpan>시간과 장소를</BoldSpan>부여해주세요
      </Paragraph>
      <div className={cx('input-area')}>
        <TimeInput 
          className={cx('time-input')}
          onChange={onTimeChangeHandler}
          value={planState.currentData.assignedTime}
        />
        <InputBox className={cx('place-input')} inputItems={items} />
      </div>
    </div>
  );
};

export default MicroGoalInput;
