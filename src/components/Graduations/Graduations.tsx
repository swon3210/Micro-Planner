import React from 'react';
import classNames from 'classnames/bind';
import styles from './Graduations.module.scss';
import { BoldHeading } from '../../elements/Text/Text';
import { Dot } from '../../elements/Icon/Icon';

const cx = classNames.bind(styles);

export interface GraduationsProps {
  className?: string;
  min: number;
  max: number;
  graduationDistance: number;
}

const Graduations = ({className, min, max, graduationDistance }: GraduationsProps) => {
  const graduations = [];

  for (let i = min; i < max; i += graduationDistance) {
    graduations.push(<BoldHeading key={i + 'heading'} className={cx('graduation-item')}>{i}</BoldHeading>);
    graduations.push(<Dot key={i + 'dot'} className={cx('graduation-item')} activeColor="var(--textColor-3)" />);
  }

  graduations.pop();

  return <div className={cx('graduations', className)}>
    {graduations}
  </div>
}

export default Graduations;