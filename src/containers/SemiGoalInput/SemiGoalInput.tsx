import React, { useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './SemiGoalInput.module.scss';
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

export interface SemiGoalInputProps {
  className?: string;
}

const SemiGoalInput = ({ className }: SemiGoalInputProps) => {
  
  const layoutAction = useLayoutAction();
  const planAction = usePlanAction();
  const planState = usePlanState();
  const semiGoal = planState.currentData.semiGoal;

  useEffect(() => {
    if (semiGoal.length !== 0) {
      layoutAction.setLayoutButtonFuncAction(() => {planAction.setSemiGoalAction(semiGoal)});
    } else {
      layoutAction.setLayoutButtonFuncAction(undefined);
    }
  }, [semiGoal]);

  // const dummyInputItems = ["하루에 글 5문단 쓰기"]
  const dummyInputItems: InputObj[] = [
    { id: 1, text: semiGoal, onChangeHandler: planAction.setSemiGoalAction},
  ]

  return (
    <div className={cx('semi-goal-input', className)}>
      <ExtraBoldHeading className={cx('heading')}>semi goal</ExtraBoldHeading>
      <Paragraph className={cx('guideline')}>
        <BoldSpan>사소한 행동 패턴</BoldSpan>을 설정해<br />
        목표를 작게 쪼개주세요.
      </Paragraph>
      <InputBox inputItems={dummyInputItems}/>
    </div>
  );
};

export default SemiGoalInput;