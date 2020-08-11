import React from 'react';
import styles from './NewPage.module.scss';
import classNames from 'classnames/bind';
import { Route } from 'react-router-dom';

import NewPlanStart from '../../containers/NewPlanStart/NewPlanStart';

const cx = classNames.bind(styles);

interface NewPageProps {
  className?: string;
}

const NewPage = ({className}: NewPageProps) => {
  return (
    <div className={cx('new-page', className)}>
      <Route exact path="/new" component={() => <NewPlanStart />}/>
    </div>
  );
};

export default NewPage;
