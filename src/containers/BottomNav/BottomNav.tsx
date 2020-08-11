import React from 'react';
import classNames from 'classnames/bind';
import styles from './BottomNav.module.scss';
import ClickableIcon from '../../components/ClickableIcon/ClickableIcon';

import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

export interface BottomNavProps {
  className?: string;
}

const BottomNav = ({ className }: BottomNavProps) => {
  return <div className={cx('bottom-nav', className)}>
    <Link className={cx('nav-item')} key="current" to="/current"><ClickableIcon size="24px" icon="CurrentList" /></Link>
    <Link className={cx('nav-item')} key="clear" to="/clear"><ClickableIcon size="24px" icon="ClearedList" /></Link>
    <Link className={cx('nav-item')} key="new" to="/new"><ClickableIcon size="24px" icon="Add" /></Link>
    <Link className={cx('nav-item')} key="setting" to="/setting"><ClickableIcon size="24px" icon="Setting" /></Link>
  </div>;
};

export default BottomNav;
