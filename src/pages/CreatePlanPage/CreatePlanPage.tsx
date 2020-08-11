import React from 'react';
import styles from './CreatePlanPage.module.scss';
import classNames from 'classnames/bind';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

import PlanIndicatorList from '../../containers/PlanIndicatorList/PlanIndicatorList';

import MainPlanInput from '../../containers/FinalGoalInput/FinalGoalInput';
import DetailPlanInput from '../../containers/SemiGoalInput/SemiGoalInput';
import MicroPlanInput from '../../containers/MicroGoalInput/MicroGoalInput';
import PlanPeriodInput from '../../containers/PlanPeriodInput/PlanPeriodInput';
import NewPlanFinish from '../../containers/NewPlanFinish/NewPlanFinish';

const cx = classNames.bind(styles);

interface CreatePlanPageProps {
  className?: string;
}

const CreatePlanPage = ({ className }: CreatePlanPageProps) => {
  const routeMatch = useRouteMatch();

  const steps = [
    {to: `${routeMatch.path}/finalGoal`},
    {to: `${routeMatch.path}/semiGoal`},
    {to: `${routeMatch.path}/microGoal`},
    {to: `${routeMatch.path}/period`},
    {to: `${routeMatch.path}/finish`},
  ];

  return (
    <div className={cx('create-plan-page', className)}>
      <PlanIndicatorList items={steps} className={cx('indicator-list')} />
      <Switch>
        <Route exact path={`${routeMatch.path}/finalGoal`} component={() => <MainPlanInput />} />
        <Route exact path={`${routeMatch.path}/semiGoal`} component={() => <DetailPlanInput />} />
        <Route exact path={`${routeMatch.path}/microGoal`} component={() => <MicroPlanInput />} />
        <Route exact path={`${routeMatch.path}/period`} component={() => <PlanPeriodInput />} />
        <Route exact path={`${routeMatch.path}/finish`} component={() => <NewPlanFinish />} />
      </Switch>
    </div>
  );
};

export default CreatePlanPage;
