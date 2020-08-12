import React from 'react';
import classNames from 'classnames/bind';
import styles from './TextGraduations.module.scss';
import { BoldHeading } from '../../elements/Text/Text';
import { Dot } from '../../elements/Icon/Icon';

const cx = classNames.bind(styles);

export interface TextGraduationsProps {
  className?: string;
  textList: string[];
}

const TextGraduations = ({className, textList }: TextGraduationsProps) => {
  const graduations = [];

  for (let text of textList) {
    graduations.push(<BoldHeading key={text} className={cx('graduation-item')}>{text}</BoldHeading>);
  }

  return <div className={cx('text-graduations', className)}>
    {graduations}
  </div>
}

export default TextGraduations;