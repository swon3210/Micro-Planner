import React from 'react';
import classNames from 'classnames/bind';
import styles from './PlanIndicatorList.module.scss';
import Indicator from '../../components/Indicator/Indicator';
import { useLocation } from 'react-router-dom';

const cx = classNames.bind(styles);

type IndicatorItem = {
  to: string;
}

export interface PlanIndicatorListProps {
  className?: string;
  items: IndicatorItem[]
}

const PlanIndicatorList = ({className, items}: PlanIndicatorListProps) => {
  const location = useLocation();
  const path = location.pathname;
  const indicatorList = items.map(item => {
    return <Indicator active={path === item.to ? true : false} className={cx('indicator-item')} key={item.to} to={item.to} />
  });
  
  return (
    <div
      className={cx('plan-indicator-list', className)}
    >
      {indicatorList}
    </div>
  )
};

PlanIndicatorList.defaultProps = {
  active: false
}

export default PlanIndicatorList;