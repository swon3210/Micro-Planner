import React from 'react';
import classNames from 'classnames/bind';
import styles from './SquareLink.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

export interface SquareLinkProps {
  to: string;
  className?: string;
  // icons:
}

const SquareLink = ({to, className}: SquareLinkProps) => {
  return (
    <Link
      to={to}
      className={cx('square-link', className)}
    >
      재영아!
    </Link>
  )
};

export default SquareLink;