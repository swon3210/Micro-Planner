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
    const assignedStartTime = item.assignedStartTime.split(':');
    const assignedStartHours = Number(assignedStartTime[0]);
    const assignedStartMinutes = Number(assignedStartTime[1]);
    const assignedEndTime = item.assignedEndTime.split(':');
    const assignedEndHours = Number(assignedEndTime[0]);
    const assignedEndMinutes = Number(assignedEndTime[1]);

    const today = days[now.getDay()];

    // 요일이 맞지 않음
      let assignedStartHoursString = String(assignedStartHours);
      let assignedStartMinutesString = String(assignedStartMinutes);
      if (Number(assignedStartHoursString) < 10) {
        assignedStartHoursString = '0' + assignedStartHoursString;
      }
      if (Number(assignedStartMinutesString) < 10) {
        assignedStartMinutesString = '0' + assignedStartMinutesString;
      }

      let assignedEndHoursString = String(assignedEndHours);
      let assignedEndMinutesString = String(assignedEndMinutes);
      if (Number(assignedEndHoursString) < 10) {
        assignedEndHoursString = '0' + assignedEndHoursString;
      }
      if (Number(assignedEndMinutesString) < 10) {
        assignedEndMinutesString = '0' + assignedEndMinutesString;
      }

      const hoursLeft = then.getHours() - Number(assignedEndHoursString);

      // 시간이 아직 안됬을 때
      // if (now.getHours() == assignedHours && now.getMinutes() < assignedMinutes) {

      // } else if (now.getHours() < assignedHours) {

      // }

      // // 현재가 수행 시간일 때
      // if (now.get)

      const leftContent = (
        <div className={cx('plan-card-left-content')}>
          <div className={cx('content-top')}>
            <BoldHeading className={cx('detail-plan')}>
              {item.semiGoal}
            </BoldHeading>
            <Paragraph className={cx('plan-when')}>
              / {item.assignedStartTime} - {item.assignedEndTime}
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
            {assignedStartHoursString}:{assignedStartMinutesString}
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
    
  });

  return <div className={cx('plan-card-list', className)}>{cardItemList}</div>;
};

export default PlanCardList;
