import rootEpic from '../rootEpic/rootEpic';
import reducers from '../rootReducer/rootReducer';
import { configureStore } from '@reduxjs/toolkit';
import { Epic, createEpicMiddleware } from 'redux-observable';

const epicMiddleware = createEpicMiddleware();

export const store = configureStore({
  reducer: reducers,
  middleware: (gdm) => gdm().concat(epicMiddleware),
});

epicMiddleware.run(rootEpic as Epic);

export const DispatchType = typeof store.dispatch;
