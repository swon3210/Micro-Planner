import React, { useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './AssignedDaysInput.module.scss';
import {
  ExtraBoldHeading,
  BoldSpan,
  Paragraph,
} from '../../elements/Text/Text';

import TextGraduations from '../../components/TextGraduations/TextGraduations';
import Ratio from '../../components/Radio/Ratio';

// Hooks
import { useLayoutAction } from '../../hooks/layout';
import { usePlanState, usePlanAction } from '../../hooks/plan';
import { Day } from '../../apis/plan';

const cx = classNames.bind(styles);

export interface AssignedDaysInputProps {
  className?: string;
}

const AssignedDaysInput = ({ className }: AssignedDaysInputProps) => {
  const planAction = usePlanAction();
  const planState = usePlanState();
  const layoutAction = useLayoutAction();
  const assignedDays = planState.currentData.assignedDays;

  useEffect(() => {
    if (assignedDays.length !== 0) {
      layoutAction.setLayoutButtonFuncAction(() => {
        planAction.setAssignedDaysAction(assignedDays);
      });
    } else {
      layoutAction.setLayoutButtonFuncAction(undefined);
    }
  }, [assignedDays]);

  const days: Day[] = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  // 이제 위의 배열이랑 실제 리듀서 상의 스토어 값이랑 비교해서 clicked 넣으면 될 것 같은데
  // 온 클릭도 비슷한 로직으로
  // 아 assignedDays 리듀서 스토어 상태값은 set으로 해야겠다. 어 근데 그러면 헷갈리지 않으려나

  const clickRatioHandler = (value: Day) => {
    console.log(assignedDays);
    if (!assignedDays.includes(value)) {
      const newAssignedDays = [ ...assignedDays ];
      newAssignedDays.push(value);
      planAction.setAssignedDaysAction(newAssignedDays);
    } else {
      const newAssignedDays = assignedDays.filter(x => x !== value);
      planAction.setAssignedDaysAction(newAssignedDays);
    }
  };

  const dayRatioItems = days.map((item) => {
    return (
      <div className={cx('ratio-item')} key={item}>
        <Ratio
          clicked={assignedDays.includes(item) ? true : false}
          onClick={() => clickRatioHandler(item)}
        ></Ratio>
      </div>
    );
  });

  return (
    <div className={cx('assigned-days-input', className)}>
      <ExtraBoldHeading className={cx('heading')}>Days</ExtraBoldHeading>
      <Paragraph className={cx('guideline')}>
        <BoldSpan>어느 요일</BoldSpan>에 계획을 수행할지 결정해주세요
        <br />
        매일 무리하지 말고<BoldSpan>조금씩 달성</BoldSpan>해가는 것도
        방법이랍니다.
      </Paragraph>
      <div className={cx('day-ratios')}>{dayRatioItems}</div>
      <TextGraduations className={cx('day-graducations')} textList={days} />
    </div>
  );
};

export default AssignedDaysInput;
