import React from 'react';
import styles from './ClearPage.module.scss';
import classNames from 'classnames/bind';

import { ExtraBoldHeading } from '../../elements/Text/Text'
import PlanCardList from '../../containers/PlanCardList/PlanCardList';

// Hooks
import { usePlanState } from '../../hooks/plan';

const cx = classNames.bind(styles);

interface ClearPageProps {
  className?: string;
}

const ClearPage = ({className}: ClearPageProps) => {
  const planState = usePlanState();

  const cardItems = planState.data;
  return (
    <div className={cx('clear-page', className)}>
      <ExtraBoldHeading className={cx('page-title')}>
        Clear
      </ExtraBoldHeading>
      <PlanCardList 
        items={cardItems}
      />
    </div>
  );
};

export default ClearPage;
