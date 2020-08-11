import React from 'react';
import classNames from 'classnames/bind';
import styles from './NewPlanStart.module.scss';
import { Link } from 'react-router-dom';
import { ExtraBoldHeading } from '../../elements/Text/Text';
import ButtonWithIcon from '../../components/ButtonWithIcon/ButtonWithIcon';

const cx = classNames.bind(styles);

export interface NewPlanStartProps {
  className?: string;
}

const NewPlanStart = ({ className }: NewPlanStartProps) => {
  return (
    <div className={cx('new-plan-start', className)}>
      <ExtraBoldHeading className={cx('title')}>New Plan</ExtraBoldHeading>
      <div className={cx('buttons')}>
        <Link to="/plan/update">
          <ButtonWithIcon
            className={cx('button')}
            activeBackgroundColor="var(--mainColor-1)"
            backgroundColor="white"
            color="var(--mainColor-1)"
          >
            기존 계획 이어나가기
          </ButtonWithIcon>
        </Link>
        <Link to="/plan/create/finalGoal">
          <ButtonWithIcon className={cx('button')}>
            새로운 계획 추가하기
          </ButtonWithIcon>
        </Link>
      </div>
    </div>
  );
};

export default NewPlanStart;
