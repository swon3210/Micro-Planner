import React, { useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './FinalGoalInput.module.scss';
import {
  ExtraBoldHeading,
  BoldSpan,
  Paragraph,
} from '../../elements/Text/Text';

// Components
import InputBox, { InputObj } from '../../components/InputBox/InputBox';

// Hooks
import { useLayoutAction } from '../../hooks/layout';
import { usePlanState, usePlanAction } from '../../hooks/plan';

const cx = classNames.bind(styles);

export interface FinalGoalInputProps {
  className?: string;
}

const FinalGoalInput = ({ className }: FinalGoalInputProps) => {
  const layoutAction = useLayoutAction();
  const planAction = usePlanAction();
  const planState = usePlanState();

  useEffect(() => {
    if (planState.currentData.finalGoal.length === 0) {
      layoutAction.setLayoutButtonFuncAction(undefined);
    }
  }, []);
  const items: InputObj[] = [
    {
      id: 1,
      text: planState.currentData.finalGoal,
      onChangeHandler: (value: string) => {
        planAction.setFinalGoalAction(value);
        layoutAction.setLayoutButtonFuncAction(() => {
          planAction.setFinalGoalAction(planState.currentData.finalGoal);
        });
      },
    },
  ];
  // const planAction = usePlanAction();

  return (
    <div className={cx('final-goal-input', className)}>
      <ExtraBoldHeading className={cx('heading')}>final goal</ExtraBoldHeading>
      <Paragraph className={cx('guideline')}>
        <BoldSpan>마지막</BoldSpan>으로 달성하고 싶은 <br />
        가장 <BoldSpan>최종적인 목표</BoldSpan>를 적어주세요
      </Paragraph>
      <InputBox inputItems={items} />
    </div>
  );
};

export default FinalGoalInput;
