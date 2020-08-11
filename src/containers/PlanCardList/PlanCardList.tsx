import React from 'react';
import classNames from 'classnames/bind';
import styles from './PlanCardList.module.scss';
import Card from '../../components/Card/Card';
import { BoldHeading, Paragraph, FaintedParagraph } from '../../elements/Text/Text';
import { ColoredRoundedButton } from '../../elements/Button/Button';
import { Plan } from '../../apis/plan';

const cx = classNames.bind(styles);

type PlanCardItem = {
  id: string;
  
}

interface PlanCardListProps {
  items: Plan[]
  className?: string;
}

const PlanCardList = ({ className, items }: PlanCardListProps) => {
  const dummyItems = [
    {
      id: 1,
      semiGoal: '하루에 글 5문단 쓰기',
      finalGoal: '꾸준히 글쓰기',
      assignedDays: ['월', '수', '금'],
      assignedTime: "9:00 PM",
      elapsedDay: 1,
      where: '내 방 책상',
      when: '저녁 9시',
      progress: 0,
      remainedTime: '00:00',
    },
    {
      id: 2,
      semiGoal: '하루에 글 5문단 쓰기',
      finalGoal: '꾸준히 글쓰기',
      assignedDays: ['월', '수', '금'],
      assignedTime: "9:00 PM",
      elapsedDay: 1,
      where: '내 방 책상',
      when: '저녁 9시',
      progress: 0,
      remainedTime: '00:00',
    },
    {
      id: 3,
      semiGoal: '하루에 글 5문단 쓰기',
      finalGoal: '꾸준히 글쓰기',
      assignedDays: ['월', '수', '금'],
      assignedTime: "9:00 PM",
      elapsedDay: 1,
      where: '내 방 책상',
      when: '저녁 9시',
      progress: 0,
      remainedTime: '00:00',
    },
  ];

  const cardItemList = items.map((item) => {
    const leftContent = (
      <div className={cx('plan-card-left-content')}>
        <div className={cx('content-top')}>
          <BoldHeading className={cx('detail-plan')}>
            {item.semiGoal}
          </BoldHeading>
          <Paragraph className={cx('plan-when')}>/ {item.assignedTime}</Paragraph>
          <Paragraph className={cx('plan-where')}>/ {item.assignedPlace}</Paragraph>
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
          <BoldHeading className={cx('main-plan')}>{item.finalGoal}</BoldHeading>
          {/* 여기 지난 날이랑 남은 시간 처리 해줘야 함 */}
          <BoldHeading className={cx('elapsed-day')}>{item.timestamp} day</BoldHeading>
        </div>
        <Paragraph className={cx('remained-time')}>{item.timestamp}</Paragraph>
        <ColoredRoundedButton className={cx('toggle-button')}>
          <Paragraph className={cx('toggle-button-text')}>START</Paragraph>
          <FaintedParagraph className={cx('reserved-time')}>{item.assignedTime}</FaintedParagraph>
        </ColoredRoundedButton>
      </div>
    );
    return (
      <Card
        key={item.id}
        className={cx('card-item')}
        leftContent={leftContent}
        rightContent={rightContent}
      />
    );
  });

  return <div className={cx('plan-card-list', className)}>{cardItemList}</div>;
};

export default PlanCardList;
