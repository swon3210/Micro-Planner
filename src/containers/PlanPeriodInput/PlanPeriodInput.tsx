import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './PlanPeriodInput.module.scss';
import {
  ExtraBoldHeading,
  BoldSpan,
  Paragraph,
} from '../../elements/Text/Text';
import Slider from '../../components/Slider/Slider';
import Graduations from '../../components/Graduations/Graduations';

// Hooks
import { useLayoutAction } from '../../hooks/layout';
import { usePlanState, usePlanAction } from '../../hooks/plan';


const cx = classNames.bind(styles);

export interface PlanPeriodInputProps {
  className?: string;
}

const PlanPeriodInput = ({ className }: PlanPeriodInputProps) => {
  
  const planAction = usePlanAction();
  const planState = usePlanState();
  const layoutAction = useLayoutAction();

  useEffect(() => {
    if (planState.currentData.period !== 1) {
      layoutAction.setLayoutButtonFuncAction(() => {planAction.setPeriodAction(planState.currentData.period)});
    } else {
      layoutAction.setLayoutButtonFuncAction(undefined);
    }
  }, [planState.currentData.period]);

  return (
    <div className={cx('plan-period-input', className)}>
      <ExtraBoldHeading className={cx('heading')}>week</ExtraBoldHeading>
      <Paragraph className={cx('guideline')}>
        <BoldSpan>구체적인 실천 기간</BoldSpan>을 설정하세요<br />
        뚜렷한 목표는 <BoldSpan>수월한 달성</BoldSpan>을 도와준답니다.
      </Paragraph>
      <Slider
        range={planState.currentData.period}
        className={cx('period-slider')}
        rangeDivider={10}
        rangeSetter={planAction.setPeriodAction}
      />
      <Graduations className={cx('period-graducations')} min={0} max={10} graduationDistance={2} />
    </div>
  );
};

export default PlanPeriodInput;