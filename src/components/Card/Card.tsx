import React from 'react';
import classNames from 'classnames/bind';
import styles from './Card.module.scss';
import { ColoredRoundSquare } from '../../elements/Div/Div';

const cx = classNames.bind(styles);

export interface CardProps {
  leftSideColor?: string;
  opacity?: number;
  leftContent?: React.ReactNode;
  rightContent?: React.ReactNode;
  className?: string;
}

const Card = ({leftSideColor, leftContent, rightContent, opacity, className}: CardProps) => {
  return (
    <div
      className={cx('card', className)}
      style={{opacity: opacity ? opacity : ""}}
    >
      <ColoredRoundSquare className={cx("left-block")} backgroundColor={leftSideColor ? leftSideColor : ""}>
        {leftContent}
      </ColoredRoundSquare>
      <div className={cx("right-block")}>
        {rightContent}
      </div>
    </div>
  )
};

export default Card;