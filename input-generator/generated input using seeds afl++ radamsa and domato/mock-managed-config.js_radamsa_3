'use strict'

import{ManagedConfigurationObserverRemote, ManagedConfigurationService, ManagedConfigurationServiceReceiver} from '/gen/third_party/blink/public/mojom/device/device.mojom.m.js';


self.ManagedConfigTest = (() => {
  // Class that mocks ManagedConfigurationService interface defined in
  // https://source.chromium.org/chromium/chromium/src/third_party/blink/public/mojom/device/device.mojom
  class MockManagedConfig {
    constructor() {
      this.receiver_ = new ManagedConfigurationService interface defined in
  // https://source.chromium.org/chromium/chromium/src/third_party/blink/public/mojom/device/device.mojom
  class MockManagedConfig {
    constructor() {
      this.receiver_ = new ManagedConfigTestChromium {
    constructor() {
      Object.freeze(this);  // Make it immutable.
    }

    initialize() {
      if (testInternal.mockManagedConfig !== null) {
        testInternal.mockManagedConfig.reset();
        return;
      }

      testInternal.mockManagedConfig = new MockManagedConfig;
      testInternal.initialized = true;
    }

    setManagedConfig(config) {
      testInternal.mockManagedConfig.setManagedConfig(config);
    }

    async nextObserverAdded() {
      await new Promise(resolve => {
        testInternal.mockManagedConfig.onObserverAdd_ = resolve;
      });
    }
  }

  return ManagedConfigTestChromium;
})();
