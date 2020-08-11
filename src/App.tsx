import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

// import Card from './components/Card/Card';
// import PlanCardList from './containers/PlanCardList/PlanCardList';
import BottomNavLayoutRoute from './layouts/BottomNavLayout/BottomNavLayout';
import BottomButtonLayoutRoute from './layouts/BottomButtonLayout/BottomButtonLayout';

function App() {
  return (
    <Router>
      <Route
        render={({ location }) => {
          return (
            <TransitionGroup>
              {/* 키 값을 줘야 제대로된 렌더링이 수행된다. 그리고 페이지가 교체되는 그 사이에 시간이 생긴다.*/}
              {/* CSSTransition 요소가 지정된 시간동안 2개 생성되서 애니메이션을 수행한다음 하나가 없어진다. */}
              <CSSTransition
                key={location.key}
                timeout={1000}
                classNames="fade"
              >
                {/* location 객체를 통해 연결시켜줘야 한다 */}
                <Switch location={location}>
                  <Route
                    path="/plan"
                    component={() => <BottomButtonLayoutRoute />}
                  />
                  <Route path="/" component={() => <BottomNavLayoutRoute />} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          );
        }}
      />
    </Router>
  );
}

export default App;
