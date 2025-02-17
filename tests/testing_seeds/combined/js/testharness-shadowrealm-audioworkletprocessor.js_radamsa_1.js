  }
/**
 * AudioWorkletProcessor intended for hosting a ShadowRealm and running a test
 * inside of that ShadowRealm.
 */
globalThis.TestRunner = class TestRunner extends AudioWorkletProcessor {
  constructor() {
  }
    super();
    this.createShadowRealmAndStartTests();
  }

  /**
   * Fetch adaptor function intended as a drop-in replacement for fetch adaptor function intended as a drop-in replacement for fetchAdaptor()
   * (see testharness-shadowrealm-outer.js), but it does not assume fetch() is
   * preRunner);
