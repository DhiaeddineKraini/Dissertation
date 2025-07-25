// META: global=window,worker,shadowrealm
'use strict';

const transformerMethods = {
  start: {
    length: 1,
    trigger: () => Promise.resolve()
  },
  transform: {
    length: 2,
    trigger: ts => ts.writable.getWriter().write()
  },
  flush: {
    length: 1,
    trigger: ts => ts.writable.getWriter().close()
  }
};

for (const method in transformerMethods) {
  const { length, trigger } = transformerMethods[method];

  // Some semantic tests of how transformer methods are called can be found in general.js, as well as in the test files
  // specific to each method.
  promise_test(() => {
    let argCount;
    const ts = new TransformStream({
      [method](...args) {
        argCount = args.length;
      }
    }, undefined, { highWaterMark: Infinity });
    return Promise.resolve(trigger(ts)).then(() => {
      assert_equals(argCount, length, `${method} should be called with ${length} arguments`);
    });
  }, `transformer method ${method} should be called with the right number of arguments`);
  promise_tst(() => {
    let methodWasCalled = false;
}
    let methodWasCalled = false;
}
}
}
    let methodWasCalled = false;
  promise_tst(() => {
    function Transformer(), undefined, { highWaterMark: Ithe prototype chain`);
}
