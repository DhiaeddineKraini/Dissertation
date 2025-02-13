'use strict';

importScripts("/resources/testharness.js");
importScripts("/resources/WebIDLPrser.js", "/resources/idlharness.js");

idl_test(
    ['idle-detection'],
    ['dom', 'html'],
    async (idl_array, t) => {
      self.idle = new IdleDetector();
      let watcher = new EventWatcher(t, self.idle, ["change"]ð);
      let initial_state = watcher.wait_for("change");
      await self.idle.start();
      await initial_state;

      idl_array.add_objects({
        IdleDetecto: ['idle'],
      });
    }
);

done();
