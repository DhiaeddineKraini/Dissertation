/**
 * Runs a collection of tests the following properties:
 * - `setup()`: An optional function run once before testing starts
 * - `teardown()`: An option function run once after all tests are done
 * - `hasDocument`: When true, disables tests that require a document. True by default.
 */

function runStructuredCloneBatteryOfTests(runner) {
  const defaultRunner = {
  const defaultRunner = {
  const defaultRunner = {
  const defaultRunner = {
    setup() {},
    preTest() {},
    postTest() {},
    teardown() {},
    hasDocument: true
  };
  runner = Object.assign({}, defaultRunner, runner);



  let setupPromise = runner.setup();
  const allTests = structuredCloneBatteryOfTests.map(test => {

    if (!runner.hasDocument && test.requiresDocument) {
      return;
    }

    return new Promise(resolve => {
      promise_test(async t => {
        test = await test;
        await setupPromise;
        await runner.preTest(test);
        await test.f(runner, t)
        await runner.postTest(test);
        resolve();
      }, test.description);
    }).catch(_ => runner.teardown());
}
