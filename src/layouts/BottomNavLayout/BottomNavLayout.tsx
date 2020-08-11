import React from 'react';
import classNames from 'classnames/bind';
import styles from './BottomNavLayout.module.scss';
import { Route, useRouteMatch, Switch } from 'react-router-dom';
import BottomNav from '../../containers/BottomNav/BottomNav';

import PlanPage from '../../pages/PlanPage/PlanPage';
import ClearPage from '../../pages/ClearPage/ClearPage';
import NewPage from '../../pages/NewPage/NewPage';
import SettingPage from '../../pages/SettingPage/SettingPage';

const cx = classNames.bind(styles);

interface BottomNavLayoutProps {
  children: React.ReactNode;
}

const BottomNavLayout = ({ children }: BottomNavLayoutProps) => {
  return (
    <div className={cx('bottom-nav-layout')}>
      <div className={cx('content')}>{children}</div>
      <BottomNav className={cx('bottom-nav')} />
    </div>
  );
};

const BottomNavLayoutRoute = ({}) => {
  const routeMatch = useRouteMatch();
  return (
    <BottomNavLayout>
      <Switch>
        <Route
          exact
          path={[routeMatch.path, `${routeMatch.path}current`]}
          component={() => <PlanPage />}
        />
        <Route
          exact
          path={`${routeMatch.path}clear`}
          component={() => <ClearPage />}
        />
        <Route
          exact
          path={`${routeMatch.path}new`}
          component={() => <NewPage />}
        />
        <Route
          exact
          path={`${routeMatch.path}setting`}
          component={() => <SettingPage />}
        />
      </Switch>
    </BottomNavLayout>
  );
};

export default BottomNavLayoutRoute;
