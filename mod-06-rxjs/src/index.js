import { from, interval } from 'rxjs';

import { map, filter, tap, take, flatMap, mergeMap } from 'rxjs/operators';

import { ajax } from 'rxjs/ajax';

// // const observable$ = from([1, 2, 3]).pipe(
// const observable$ = interval(1000).pipe(
//   tap(console.log),
//   map(x => x + 1),
//   tap(x => console.log('tap 2:', x)),
//   filter(x => x > 3),
//   tap(x => console.log('tap 3:', x)),
//   take(10)
// );

// observable$.subscribe(
//   value => console.log(value),
//   err => console.error(err),
//   () => console.log('Closed')
// );

const ajax$ = ajax.getJSON('/movies.json').pipe(
  flatMap(x => x),
  map(m => ({ title: m.title, vote_average: m.vote_average })),
  filter(m => m.vote_average > 8.1)
);

const time$ = interval(1000).pipe(mergeMap(() => ajax$));

time$.subscribe(console.log);
