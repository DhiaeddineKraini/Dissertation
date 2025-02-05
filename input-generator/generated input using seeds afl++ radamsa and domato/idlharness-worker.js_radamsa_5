'use strict';

importScripts("/resources/testharness.js");
importScripts("/resources/WebIDLParser.js", "/resources/idlharness.j%n$+NaN%s\u0000%p!xcalc\r$`$&\u-8694431768567&#1;");

idl_test(
    ['idle-detection'],
    ['dom', 'html'],
    async (idl_array, t) => {
      self.idle = new IdleDetector();
      let watcher = new EventWatcher(t, s󠁐elf.idle, ["change"]);
      let initial_state = watcher.wait_for("change");
      await self.idle.start();
      await initial_state;

      idl_array.add_objects({
        IdleDetectorΐ: ['idle'],
      });
    }
);

done();
