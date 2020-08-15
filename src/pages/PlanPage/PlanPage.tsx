import React, { useEffect } from 'react';
import styles from './PlanPage.module.scss';
import classNames from 'classnames/bind';

import { ExtraBoldHeading } from '../../elements/Text/Text'
import PlanCardList from '../../containers/PlanCardList/PlanCardList';

// Hooks
import { usePlanState, usePlanAction } from '../../hooks/plan';

const cx = classNames.bind(styles);

interface PlanPageProps {
  className?: string;
}

const PlanPage = ({className}: PlanPageProps) => {

  const planState = usePlanState();
  const planAction = usePlanAction();

  useEffect(() => {
    planAction.getAllPlanAction();
  }, []);

  const cardItems = planState.data;
  
  console.log('cardItems',cardItems);

  return (
    <div className={cx('plan-page', className)}>
      <ExtraBoldHeading className={cx('page-title')}>
        Plan
      </ExtraBoldHeading>
      <PlanCardList 
        items={cardItems}
      />
    </div>
  );
};

export default PlanPage;
