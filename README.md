# JS Fundamentals

Some basic JS examples for forgetful

## Folders structure

- [Fundamentals](./fundamentals)
  Very very basic javascript examples:
  - [shapesFunctions.js](./fundamentals/shapesFunctions.js): Triangle area with js functions
  - [film.js](./fundamentals/film.js): Can you watch a film rated with pg? js conditional statements
  - [freakom.js](./fundamentals/freakom.js): Freak words translator. js string manipulation
  - [runnerStats.js](./fundamentals/runnerStats.js): Runner stats. js. For loop
  - [superheroesFight.js](./fundamentals/superheroesFight.js): Who wins? While loop
  - [dates.js](./fundamentals/dates.js): js dates
- [Objets](./objects)
  - [objetcs.js](./objects/objects.js): js objects, prototype, class,...
- [Intermediate](./intermediate)
  - [scopes](./intermediate/scopes.js): scopes, functions, var, const, let
  - [arrays](./intermediate/arrays.js): Array operations
  - [closures](./intermediate/closures.js): js closures
  - [semicolon](./intermediate/semicolon.js): js languaje structure, Why semicolon?
- [this](./this): Who is 'this'?
  - [this](./this/this.js): This, self( or \_this) and arrow functions
  - [bind](./this/bind.js): bind function
  - [call](./this/apply.js): call and apply
  - [index.js](./this/index.js): bind for frontend - onclick event
- [callbacks](./callbacks) Asyncronous javascript
  - [callback](./callbacks/callback.js): js callbacks
  - [swapiCallbacks](./callbacks/swapiCallbacks.js): Using Start Wars API with js callbacks
  - [swapiPromises](./callbacks/swapiPromises.js): Using Start Wars API with js promises
  - [swapiAsyncAwait](./callbacks/swapiAsyncAwait.js): Using Start Wars API with js async/await
  - [timeout](./callbacks/timeout.html): Timeout and callback in frontend, manual stopping timeout
  - [interval](./callbacks/interval.html): Interval and callback in frontend, manual stopping interval
- [dataAndFunctions](./dataAndFunctions) js data structures and advanced functions
  - [fibonacci](./dataAndFunctions/fibonacci.js) Fibonacci series: recursive js functions and memoization
  - [iteratedFibonacci](./dataAndFunctions/iteratedFibonacci.js) Fibonacci series: iterated (next)
  - [generatedFibonacci](./dataAndFunctions/generatedFibonacci.js) Fibonacci series: generators (yield)
  - [inmutability](./dataAndFunctions/inmutability.js) mutable vs inmutable: function example

## Use

Each file is an executable node script following lasts Ecmascript specification.

Execution example: In order to execute shapeFunctions.js you need to run:
```
node ./fundamentals/shapeFunctions.js
```

## Transpiled code

You can generate transpiled code by using babel. The codes will be generated under the "lib" folder:
```
npm run build
```
