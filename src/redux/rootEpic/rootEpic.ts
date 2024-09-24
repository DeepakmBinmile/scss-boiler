import { Epic, combineEpics } from 'redux-observable';

import { dummyEpic } from './dummyEpic';

const epics = [dummyEpic];

const rootEpic = combineEpics(...(new Set(epics) as unknown as Epic[]));
export default rootEpic;
