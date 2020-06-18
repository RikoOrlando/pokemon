import React from 'react';
import Home from './pages/Home';
import Detail from './pages/Detail';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import history from './history'

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route exact path={'/detail'} component={Detail} />
          <Route exact path={'/'} component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
