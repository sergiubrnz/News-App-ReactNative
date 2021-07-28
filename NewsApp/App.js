import * as React from 'react';
import ToolBar from './navigation/toolBar';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import colorReducer from './store/reducers/colors';

const store = createStore(combineReducers({ colorReducer }), applyMiddleware(thunk));


const App = () => {
  return (
    <Provider store={store}>
      <ToolBar />
    </Provider>
  );
};


export default App;
