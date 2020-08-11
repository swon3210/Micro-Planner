import React from 'react';
import styles from './SettingPage.module.scss';
import classNames from 'classnames/bind';

import { ExtraBoldHeading } from '../../elements/Text/Text'

const cx = classNames.bind(styles);

interface SettingPageProps {
  className?: string;
}

const SettingPage = ({className}: SettingPageProps) => {
  return (
    <div className={cx('setting-page', className)}>
      <ExtraBoldHeading className={cx('page-title')}>
        Setting
      </ExtraBoldHeading>
    </div>
  );
};

export default SettingPage;
