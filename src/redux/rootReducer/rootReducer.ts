import { Reducer, combineReducers } from '@reduxjs/toolkit';

import { reducerDummy } from '../slices/dummySlice';

type RootState = {
  reducerDummy: ReturnType<typeof reducerDummy>;
};

const reducers = combineReducers({
  reducerDummy,
});

const initialState: RootState = reducers(undefined as any, { type: '@@INIT' });

const resettableRootReducer: Reducer<RootState, any> = (state, action) => {
  const currentState = state || initialState;
  
  if (action.type === 'store/reset') {
    return initialState;
  }
  
  return reducers(currentState, action);
};

export default resettableRootReducer;

// In your reset actions file
export const resetRootReducer = () => ({ type: 'store/reset' });
