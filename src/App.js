import React from 'react';
import Home from './pages/Home';
import Detail from './pages/Detail';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import {Provider} from 'react-redux'
import history from './history'
import store from './store/store'
import './styles.scss'

function App() {
  return (
    <div className="App">
        <Provider store={store}>
            <Router history={history}>
              <Switch>
                <Route exact path={'/'} component={Home} />
                <Route exact path={'/detail'} component={Detail} />
              </Switch>
            </Router>
        </Provider>
    </div>
  );
}

export default App;
