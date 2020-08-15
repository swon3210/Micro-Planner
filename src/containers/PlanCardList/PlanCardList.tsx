import React from 'react';
import classNames from 'classnames/bind';
import styles from './PlanCardList.module.scss';
import Card from '../../components/Card/Card';
import {
  BoldHeading,
  Paragraph,
  FaintedParagraph,
} from '../../elements/Text/Text';
import { ColoredRoundedButton } from '../../elements/Button/Button';
import { Plan, Day } from '../../apis/plan';

const cx = classNames.bind(styles);

type PlanCardItem = {
  id: string;
};

interface PlanCardListProps {
  items: Plan[];
  className?: string;
}

const PlanCardList = ({ className, items }: PlanCardListProps) => {
  const days: Day[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const cardItemList = items.map((item) => {
    const now = new Date();
    const then = new Date(item.timestamp);
    const daysPassed = now.getDate() - then.getDate();
    const assignedTime = item.assignedTime.split(":");
    const assignedHours = Number(assignedTime[0]);
    const assignedMinutes = Number(assignedTime[1]);

    const today = days[now.getDay()];

    if (item.assignedDays.includes(today)) {
      let assignedHoursString = String(assignedHours);
      let assignedMinutesString = String(assignedMinutes);
      if (Number(assignedHoursString) < 10) {
        assignedHoursString = '0' + assignedHoursString;
      }
      if (Number(assignedMinutesString) < 10) {
        assignedMinutesString = '0' + assignedMinutesString;
      }

      const hoursLeft = then.getHours() - Number(assignedHoursString);

      const leftContent = (
        <div className={cx('plan-card-left-content')}>
          <div className={cx('content-top')}>
            <BoldHeading className={cx('detail-plan')}>
              {item.semiGoal}
            </BoldHeading>
            <Paragraph className={cx('plan-when')}>
              / {item.assignedTime}
            </Paragraph>
            <Paragraph className={cx('plan-where')}>
              / {item.assignedPlace}
            </Paragraph>
          </div>
          <div className={cx('content-bottom')}>
            <FaintedParagraph className={cx('plan-reserved-days')}>
              {item.assignedDays.join(' ')}
            </FaintedParagraph>
            <BoldHeading className={cx('plan-progress')}>
              {item.progress}% clear
            </BoldHeading>
          </div>
        </div>
      );
      const rightContent = (
        <div className={cx('plan-card-right-content')}>
          <div className={cx('content-top')}>
            <BoldHeading className={cx('main-plan')}>
              {item.finalGoal}
            </BoldHeading>
            {/* 여기 지난 날이랑 남은 시간 처리 해줘야 함 */}
            <BoldHeading className={cx('elapsed-day')}>
              {daysPassed} day
            </BoldHeading>
          </div>
          <Paragraph className={cx('remained-time')}>
            {assignedHoursString}:{assignedMinutesString}
          </Paragraph>
          <ColoredRoundedButton className={cx('toggle-button')}>
            <Paragraph className={cx('toggle-button-text')}>앞으로</Paragraph>
            <FaintedParagraph className={cx('reserved-time')}>
              {hoursLeft}시간
            </FaintedParagraph>
          </ColoredRoundedButton>
        </div>
      );
      return (
        <Card
          key={item.id ? item.id : undefined}
          className={cx('card-item')}
          leftContent={leftContent}
          rightContent={rightContent}
        />
      );
    }
  });

  return <div className={cx('plan-card-list', className)}>{cardItemList}</div>;
};

export default PlanCardList;
