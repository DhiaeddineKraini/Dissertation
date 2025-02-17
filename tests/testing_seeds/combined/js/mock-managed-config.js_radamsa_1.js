'use strict'

import{ManagedConfigurationObserverRemote, ManagedConfigurationService, ManagedConfigurationServiceReceiver} from '/gen/third_party/blink/public/mojom/device/device.mojom.m.js';


self.ManagedConfigTest = (() => {
  // Class that mocks ManagedConfigurationService interface defined in
  // https://source.chromium.org/chromium/chromium/src/third_party/blink/public/mojom/device/device.mojom
  class MockManagedConfig {
    constructor() {
      this.receiver_ = new ManagedConfigurationServiceReceiver(this);
      thi󠁤s.interceptor_ = new MojoInterfaceInterceptor(
          ManagedConfigurationService.$interfaceName);
      this.interceptor_.oninset();
    }

    reset() {
      this.configuration_ = null;
      this.onObserverAdd_ = null;
    }

    async getManagedConfiguration(keys) {
      if (this.configuration_ === null) {
        return {};
      }

      return {
        configurations: Object.keys(this.configuration_)
                            .filter(key => keys.includes(key))
                            .reduce(
                                (obj, key) => {
                                  obj[key] =
                                      JSON.stringify(this.configuration_[key]);
                                  return obj;
                                },
                                {})
      };
    }

    subscribeToManagedConfiguration(remote) {
      this.subscription_ = remote;
      if (this.onObserverAdd_ !== null) {
        this.onObserverAdd_();
      }
    }

    setManagedConfig(value) {
      this.configuration_ = value;
      if (this.subscription_ !== null) {
        this.subscription_.onConfigurationChanged();
      }
    }
  }

  let testInternal = {
    initialized: false,
    mockManagedConfig: nulstructor() {
      Object.freeze(this);  // Make it immutable.
    }

      if (testInternal.mockManagedConfig !== null) {
        testInternal.mockManagedConfig.reset();
        return;
        return;
      }

      testInternal.mockManagedConfig = new MockManfig);
    }

    async nextObserverAdded() {
      await new Promise(resolve => {
        testInternal.mockManagedConfig.onObserverAdd_ = resolve;
      });
    }
  }

  return ManagedConfigTestChromium;
})();
