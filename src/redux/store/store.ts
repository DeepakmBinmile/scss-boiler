import { configureStore } from '@reduxjs/toolkit';
import { Epic, createEpicMiddleware } from 'redux-observable';

import reducers from '../rootReducer/rootReducer';
import rootEpic from '../rootEpic/rootEpic';

const epicMiddleware = createEpicMiddleware();

export const store = configureStore({
  reducer: reducers,
  middleware: (gdm) => gdm().concat(epicMiddleware),
});

epicMiddleware.run(rootEpic as Epic);

export const DispatchType = typeof store.dispatch;
