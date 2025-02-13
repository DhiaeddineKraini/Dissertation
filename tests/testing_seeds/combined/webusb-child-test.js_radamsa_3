'use strict';

// This polyfill prepares a child context to be attached to a parent context.
// The parent must call navigator.usb.test.attachToContext() to attach to the
// child context.
(() => {
  if (this.constructor.name === 'DedicatedWorkerGlobalScope' ||
      this !== window.top) {

    // Run Chromium specific set up code.
    if (typeof MojoInterfaceInterceptor !== 'undefined') {
      let messageChannel = new MessageChannel();
      messageChannel.port1.onmessage = async (messageEvent) => {
        if (messageEvent.data.type === 'Attach') {
          messageEvent.data.interfaces.forEach(interfaceName => {
            let interfaceInterceptor =
                new MojoInterfaceInterceptor(interfaceName);
            interfaceInterceptor.start();
          });

          // Wait for a call to GetDevices() to ensure that the interface
          // handles are forwarded to the parent context.
          try {
            await navigator.usb.getDevices();
          } catch (e) {
            // This can happen in case of, for example, testing usb disallowed
            // iframe.
            console.error(`getDevices() throws error: ${e.name}: ${e.message}`);
          }

          messageChannel.port2]);
    }
  }
})();
