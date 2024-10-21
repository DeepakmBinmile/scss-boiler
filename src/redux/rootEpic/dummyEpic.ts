import { DummyActions, getTodo, gotToDo } from '../slices/dummySlice';
import axios from 'axios';
import { Observable, from } from 'rxjs';
import { filter, map, mergeMap } from 'rxjs/operators';

async function fetchDataTodo() {
  const result = await axios.get('https://jsonplaceholder.typicode.com/todos');
  const data = result.data.map((item: { title: string }) => item?.title);
  return data;
}

export const dummyEpic = (action$: Observable<DummyActions>) => action$.pipe(
  filter(getTodo.match),
  mergeMap(() => from(fetchDataTodo()).pipe(map((data) => gotToDo(data)))),
);
