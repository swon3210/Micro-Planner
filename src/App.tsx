import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import BottomNavLayoutRoute from './layouts/BottomNavLayout/BottomNavLayout';
import BottomButtonLayoutRoute from './layouts/BottomButtonLayout/BottomButtonLayout';

function App() {
  return (
    <Router>
      <Route
        render={({ location }) => {
          return (
            <TransitionGroup>
              <CSSTransition
                key={location.key}
                timeout={1000}
                classNames="fade"
              >
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
