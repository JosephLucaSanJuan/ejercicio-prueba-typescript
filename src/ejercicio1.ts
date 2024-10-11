import { interval, merge } from 'rxjs';
import { take } from 'rxjs/operators';

const interval1$ = interval(500).pipe(take(5));
const interval2$ = interval(1000).pipe(take(5));

merge(interval1$, interval2$).subscribe({
    next: (value) => console.log(value),
    complete: () => console.log('Completado'),
});