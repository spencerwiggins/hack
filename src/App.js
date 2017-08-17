// @flow

// #4e3d31
// #86a7a2
// #74667b
import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import {
  createStore,
  compose,
  applyMiddleware,
 } from 'redux';
import thunk from 'redux-thunk';
import { reducers } from './eil-client-chat-state';
import Window from './components/Window';
import About from './components/About';

const store = createStore(reducers, {}, compose(
    applyMiddleware(
      thunk
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

const App = function App () {
  return (
    <ReduxProvider store={store}>
      <Router>
        <div>
          <Route exact path="/" component={Window}/>
          <Route path="/about" component={About}/>
        </div>
      </Router>
    </ReduxProvider>
  );
};

export default App;
