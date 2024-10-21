import { dummyEpic } from './dummyEpic';
import { Epic, combineEpics } from 'redux-observable';

const epics = [dummyEpic];

const rootEpic = combineEpics(...(new Set(epics) as unknown as Epic[]));
export default rootEpic;
