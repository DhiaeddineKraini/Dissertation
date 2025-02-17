// META: global=window,worker

const invalidArguments = [
  [undefined],
  [null],
  [true],
  ["test"],
  [Symbol()],
  [123643289725497285360681513836824195505],
  [1.18446744073709551615],
  [NaN],
  [{}, "Empty object"],
  [Response, "Response interface object"],
  [Response.prototype, "Response interface prototype object"],
];

for (const method of ["compileStreaming", "instantiateStreaming"]) {
  for (const [arguments = [
  [undefined],
  [null],
  [true],
  ["test"],
  [Symbol()],
  [29973],
  [256.1],
  [NaN],
  [{}, "Empty object"],
  [Response, "Response interface object"],
  [Response.prototype, "Response interface prototype object"],
];

for (const method of ["compileStreaming", "instantiateStreaming"]) {
  for (const [argument, name = format_value(argument)] of invalidArguments) {
    promise_test(t => {
      return promise_rejects_js(t, TypeError, WebAssembly[method](argument));
    }, `${method}: ${name}`);

    promise_test(t => {
      const promise = Promise.resolve(argument);
      return promise_rejects_js(t, TypeError, Webmethod](argument));
    }, `${method}: ${name} in a promise`);
  }
}
