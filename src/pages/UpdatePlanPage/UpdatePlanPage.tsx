import React from 'react';
import styles from './UpdatePlanPage.module.scss';
import classNames from 'classnames/bind';
import { Route, Switch } from 'react-router-dom';

import PlanIndicatorList from '../../containers/PlanIndicatorList/PlanIndicatorList';

import MainPlanInput from '../../containers/FinalGoalInput/FinalGoalInput';
import DetailPlanInput from '../../containers/SemiGoalInput/SemiGoalInput';
import MicroPlanInput from '../../containers/MicroGoalInput/MicroGoalInput';
import PlanPeriodInput from '../../containers/PlanPeriodInput/PlanPeriodInput';
import NewPlanFinish from '../../containers/NewPlanFinish/NewPlanFinish';

const cx = classNames.bind(styles);

interface UpdatePlanPageProps {
  className?: string;
}

const UpdatePlanPage = ({ className }: UpdatePlanPageProps) => {

  const steps = [
    {to: "/update/mainPlan"},
    {to: "/update/detailPlan"},
    {to: "/update/microPlan"},
    {to: "/update/planPeriod"},
    {to: "/update/finish"},
  ]

  return (
    <div className={cx('update-plan-page', className)}>
      <PlanIndicatorList items={steps} className={cx('indicator-list')} />
      <Switch>
        <Route exact path="/update/mainPlan" component={() => <MainPlanInput />} />
        <Route exact path="/update/detailPlan" component={() => <DetailPlanInput />} />
        <Route exact path="/update/microPlan" component={() => <MicroPlanInput />} />
        <Route exact path="/update/planPeriod" component={() => <PlanPeriodInput />} />
        <Route exact path="/update/finish" component={() => <NewPlanFinish />} />
      </Switch>
    </div>
  );
};

export default UpdatePlanPage;