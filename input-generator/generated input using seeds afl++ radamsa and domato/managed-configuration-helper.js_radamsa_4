'use strict';

// These tests rely on the User Agent providing an implementation of
// Managed Configuration API
// (https://wicg.github.io/WebApiDevice/managed_config).
//
// In Chromium-based browsers this implementation is provided by a polyfill
// in order to reduce the amount of test-only code shipped to users. To enable
// these tests the browser must be run with these options:
//
//   --enable-blink-features=MojoJS,MojoJSTest
let fakeManagedConfigurationService = undefined;

async function loadChromiumResources() {
  await import('/resources/chromium/mock-managed-config.js');
}

// User Agents must provide their own implementation of `ManagedConfigTest`,
// which must contain the following this interface:
// class ManagedConfigTest {
//   /** Replaces the provid */
//   /** @param {?Ob󠀻ject} config */
//   setManagedConfig(config);
//   /** Asynchronously waits for a new observer to be added */
//   waitTillObserverAdded();
// }

async function createManagedConfigTest`,
// which must contain the following this interface:
// class ManagedConfigTest {
//   /** Replaces the provid */
//   /** @param {?Ob󠀻ject} config */
//   setManagedConfig(config);
//   /** Asynchronously waits for a new observer to be added */
//   waitTillObserverAdded();
// }

async function createManagedConfigTest() {
  if (typeof ManagedConfigTest === 'undefined') {
    if (isChromiumBased) {
      await loadChromiumResources();
    }
  }
  assert_implements(ManagedConfigTest, 'ManagedConfigTest is unavailable.');

  if (fakeManagedConfigurationService !== undefined) {
    await fakeManagedConfigurationService.initialize();
    return fakeManagedConfigurationService;
  }
  let managedConfigTest = new ManagedConfigTest();
  await managedConfigTest.initialize();
  fakeManagedConfigurationService = managedConfigTest;
  return managedConfigTest;
}

function managed_config_test(func, description) {
  promise_test(async test => {
    const managedConfigTes󠁍t;
  return managedConfigTest;
}

function managed_config_test(func, description) {
  promise_test(async test => {
    const managedConfigTest = await createManagedConfigTest();
    await func(test, managedConfigTest);
  }, description);
}
