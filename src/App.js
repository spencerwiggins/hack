// @flow
import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
// import {
//   // registerSocketListeners,
//   // reduxDependencies,
//  } from './businessLogic';
import {
  createStore,
  compose,
  applyMiddleware,
 } from 'redux';
import thunk from 'redux-thunk';
import { reducers } from './eil-client-chat-state';
import Window from './components/Window';

const store = createStore(reducers, {}, compose(
    applyMiddleware(
      thunk
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

// Register socket event listeners
// registerSocketListeners(reduxDependencies.socket, store);

const App = function App () {
  return (
    <ReduxProvider store={store}>
      <Window />
    </ReduxProvider>
  );
};

export default App;
