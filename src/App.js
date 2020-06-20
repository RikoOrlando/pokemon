import React from 'react';
import Home from './pages/Home';
import Detail from './pages/Detail';
import { Route, Switch, useLocation } from 'react-router-dom';
import {useTransition, animated} from 'react-spring'
import './styles.scss'

function App() {
  const location = useLocation()
  const transitions = useTransition(location, location => location.pathname, {
    from: { opacity: 0, transform: 'scale(0)' },
    enter: { opacity: 1, transform: 'scale(1)' },
    leave: { opacity: 0, transform: 'scale(0)' },
    config: {duration: 300}
  })
  return (
    <div className="App">
              {
                transitions.map(({item: location, props, key}) => (
                  <animated.div key={key} style={props}>
                    <Switch location={location}>
                      <Route exact path={'/'} component={Home} />
                      <Route exact path={'/detail'} component={Detail} />
                    </Switch>
                  </animated.div>
                ))
              }
    </div>
  );
}

export default App;
