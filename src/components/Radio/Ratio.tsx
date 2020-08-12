import React from 'react';
import classNames from 'classnames/bind';
import styles from './Ratio.module.scss';
import { ColoredBorderCircle } from '../../elements/Div/Div';
import { Dot } from '../../elements/Icon/Icon'

const cx = classNames.bind(styles);

export interface RatioProps {
  className?: string;
  clicked: boolean;
  onClick?: () => void;
}

const Ratio = ({className, onClick, clicked}: RatioProps) => {
  return (
    <ColoredBorderCircle
      className={cx('ratio', className)}
      onClick={onClick}
    >
      <div className={cx('ratio-inner-circle', clicked ? "clicked" : "")}></div>
    </ColoredBorderCircle>
  )
};

export default Ratio;