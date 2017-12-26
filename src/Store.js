import { Platform } from 'react-native';
import {
  createStore,
  applyMiddleware,
  compose
} from 'redux';
import devtools from 'remote-redux-devtools';
import { composeWithDevTools } from 'redux-devtools-extension';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import RootReducer from './Reducers';

const middleware = applyMiddleware(thunk, promise, logger)

const Store = createStore(
  RootReducer,
  composeWithDevTools(
    middleware,
    devtools({
      name: Platform.OS,
      hostname: 'localhost',
      port: 5678
    })
  )
);

export default Store;
