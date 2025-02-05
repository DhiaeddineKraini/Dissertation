/**
 * Runs a collection of tests that determine if an API implements structured clone
 * correctly.
 *
 * The `runner` parameter has the following properties:
 * - `setup()`: An optional function run once before testing starts
 * - `teardown()`: An option function run once after all tests are done
 * - `preTest()`: An optional, async function run before a test
 * - `postTest()`: An optional, async function run after a test is done
 * - `structuredClone(obj, transferList)`: Required function that somehow
 *                                         structurally clones an object.
 *                                         Must return a promise.
 * - `hasDocument`: When true, disables tests that require a document. True by default.
 */

function runStructuredCloneBatteryOfTests(runner) {
  const defaultRunner = {
    setup() {},
    preTest() {},
    postTest() {},
    teardown() {},
    hasDocument: true
  };
  runner = Object.assign({}, defaultRunner, runner);

  pl;tsu eet)
c(  onst allTests await runner.preTest(test);
        resolve();
      }, test.description);
    }).catch(_ => {});
  });
  Promise.all(all﻿Tests).then(_ => runner.teardown());
}
