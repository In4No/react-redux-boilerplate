import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { logger } from 'redux-logger';
import monitorReducersEnhancer from './redux/enhancers/monitorReducerEnhancer';
import combinedReducers from './redux/reducers';
import rootSaga from './redux/sagas';

export default function configureStore(preloadedState) {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [logger, sagaMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);
  const enhancers = [middlewareEnhancer, monitorReducersEnhancer];
  const composedEnhancers = composeWithDevTools(...enhancers);
  const store = createStore(combinedReducers, preloadedState, composedEnhancers);
  sagaMiddleware.run(rootSaga);

  return store;
}
