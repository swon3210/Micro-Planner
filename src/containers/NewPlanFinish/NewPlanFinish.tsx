import React, { useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './NewPlanFinish.module.scss';
import { ExtraBoldHeading, Paragraph } from '../../elements/Text/Text';

// Hooks
import { useLayoutAction } from '../../hooks/layout';
import { usePlanState, usePlanAction } from '../../hooks/plan';

const cx = classNames.bind(styles);

export interface NewPlanFinishProps {
  className?: string;
}

const NewPlanFinish = ({ className }: NewPlanFinishProps) => {
  // 여기서 전부 제대로 설정했는지 확인시켜야 할듯
  // 설정 안된거 있으면 생성 못하게 만들어야 한다
  // 다시 설정하기 위해 넘어갔을 때 상태가 초기화되는 문제
  // period 가 0 여도 넘어가는 문제
  // transition 때문에 너무 많은 렌더 함수 수행이 일어난다
  // 인풋박스의 textarea 도 엘리먼트에 넣어야 한다
  // 인풋박스 textarea 가 자동으로 높이가 변화되도록 만들어야 한다
  // 인풋박스가 플레이스 홀더를 동적으로 받아오도록 만들어야 한다
  const planState = usePlanState();
  const planAction = usePlanAction();
  const layoutAction = useLayoutAction();

  useEffect(() => {
    if (
      planState.currentData.finalGoal !== "" &&
      planState.currentData.semiGoal !== "" &&
      planState.currentData.assignedPlace !== "" &&
      planState.currentData.period !== 1
    ) {
      layoutAction.setLayoutButtonFuncAction(() => planAction.addPlanAction(planState.currentData));
    } else {

    }
  }, []);

  console.log(planState);

  return (
    <div className={cx('new-plan-finish', className)}>
      <ExtraBoldHeading className={cx('heading')}>finish !</ExtraBoldHeading>
      <Paragraph className={cx('guideline')}>
        멋진 목표가 생성되었어요. <br />
        세부 설정을 해보세요!
      </Paragraph>
    </div>
  );
};

export default NewPlanFinish;
