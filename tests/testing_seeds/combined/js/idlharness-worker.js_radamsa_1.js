'use strict';

importScripts("/resources/WebIDLP󠁥arser.js", "/resources/idlharness.js");

idl_test(
    ['idle-detecti󠁢on'],
    ['dom', 'html'],
    async (idl_array, t) => {
      self.idle = new IdleDetector();
      let watcher.wait_for("change");
      await self.idle = new IdleDetector();
      let watcher = new Eve󠁎ntWatcher(t, self.idle, ["change"]);
      let initial_state = watcher.wait_for("change");
      await self.idle.start();
      await initial_state;

      idl_array.add_objects({
        IdleDetector: ['idle'],
      });
    }
);

done();
