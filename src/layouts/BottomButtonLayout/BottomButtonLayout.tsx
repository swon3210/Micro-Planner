import React from 'react';
import classNames from 'classnames/bind';
import styles from './BottomButtonLayout.module.scss';
import {
  Route,
  useRouteMatch,
  Switch,
  useLocation,
  useHistory,
} from 'react-router-dom';

import { BoldHeading } from '../../elements/Text/Text';
import { ColoredSquareButton } from '../../elements/Button/Button';

import CreatePlanPage from '../../pages/CreatePlanPage/CreatePlanPage';
import UpdatePlanPage from '../../pages/UpdatePlanPage/UpdatePlanPage';

// Hooks
import { useLayoutState } from '../../hooks/layout';

const cx = classNames.bind(styles);

interface BottomButtonLayoutProps {
  children: React.ReactNode;
}

const BottomButtonLayout = ({ children }: BottomButtonLayoutProps) => {
  const location = useLocation();
  const history = useHistory();
  const path = location.pathname.split('/');
  const layoutState = useLayoutState();

  const step = path[path.length - 1];

  const buttonClickHandler = () => {
    switch (step) {
      case 'finalGoal':
        history.push('semiGoal');
        break;
      case 'semiGoal':
        history.push('microGoal');
        break;
      case 'microGoal':
        history.push('assignedDays');
        break;
      case 'assignedDays':
        history.push('period');
        break;
      case 'period':
        history.push('finish');
        break;
      case 'finish':
        history.push('/current');
        break;
      default:
        break;
    }
    if (layoutState.buttonFunc) {
      layoutState.buttonFunc();
    }
  };

  return (
    <div className={cx('bottom-button-layout')}>
      <div className={cx('content')}>{children}</div>
      <div className={cx('bottom-button')}>
        <ColoredSquareButton
          backgroundColor={
            layoutState.buttonFunc ? 'var(--mainColor-1)' : 'var(--textColor-4)'
          }
          activeBackgroundColor={
            layoutState.buttonFunc ? 'var(--mainColor-2)' : 'var(--textColor-3)'
          }
          onClick={layoutState.buttonFunc ? buttonClickHandler : undefined}
          className={cx('bottom-button')}
        >
          <BoldHeading className={cx('bottom-button-text')}>완료</BoldHeading>
        </ColoredSquareButton>
      </div>
    </div>
  );
};

const BottomButtonLayoutRoute = ({}) => {
  const routeMatch = useRouteMatch();
  return (
    <BottomButtonLayout>
      <Switch>
        <Route
          path={`${routeMatch.path}/create`}
          component={() => <CreatePlanPage />}
        />
        <Route
          path={`${routeMatch.path}/update`}
          component={() => <UpdatePlanPage />}
        />
      </Switch>
    </BottomButtonLayout>
  );
};

export default BottomButtonLayoutRoute;
