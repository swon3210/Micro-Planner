import React from 'react';
import classNames from 'classnames/bind';
import styles from './Indicator.module.scss';
import { Link } from 'react-router-dom';
import { Dot } from '../../elements/Icon/Icon'

const cx = classNames.bind(styles);

export interface IndicatorProps {
  className?: string;
  color?: string;
  activeColor?: string;
  active: boolean;
  to: string;
}

const Indicator = ({className, color, activeColor, active, to}: IndicatorProps) => {
  return (
    <Link to={to}>
      <Dot
        className={cx('indicator', className, { active: active })}
        backgroundColor={color}
        activeColor={activeColor}
      />
    </Link>
  )
};

Indicator.defaultProps = {
  active: false
}

export default Indicator;