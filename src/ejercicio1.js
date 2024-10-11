"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const interval1$ = (0, rxjs_1.interval)(500).pipe((0, operators_1.take)(5));
const interval2$ = (0, rxjs_1.interval)(1000).pipe((0, operators_1.take)(5));
(0, rxjs_1.merge)(interval1$, interval2$).subscribe({
    next: (value) => console.log(value),
    complete: () => console.log('Completado'),
});
//# sourceMappingURL=ejercicio1.js.map