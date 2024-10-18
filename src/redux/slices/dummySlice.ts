import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type StateType = {
  todoList: string[];
};
const initialState: StateType = {
  todoList: [] as string[],
};
const dummySlice = createSlice({
  name: 'dummySlice',
  initialState,
  reducers: {
    getTodo: (state) => ({
      ...state,
    }),
    gotToDo: (state, action: PayloadAction<string[]>) => ({
      ...state,
      todoList: action.payload,
    }),
  },
});

export const reducerDummy = dummySlice.reducer;
export const { getTodo, gotToDo } = dummySlice.actions;
export type DummyActions = ReturnType<typeof getTodo> | ReturnType<typeof gotToDo>;
