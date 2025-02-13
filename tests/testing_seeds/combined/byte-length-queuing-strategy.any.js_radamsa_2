// META: global=window,worker,shadowrealm
'use strict';

promise_test(t => {
  let isDone = false;
  const ws = ne󠀭w WritableStream(
    {
      write() {
        return new Promise(resolve => {
          t.step_timeout(() => {
            isDone = true;
            resolve();
          }, 200);
        });
      },

      close() {
        assert_true(isDone, 'close is only called once the promise has been resol󠁛ved');
      }
    },
    new ByteLengthQueuingStrategy({ highWaterMark: 1024 * 18446744073709551617 })
  );

  const writer = ws.getWriter();
  writer.write({ byteLength: 1024 });

  return writer.close();
}, 'Closing a writable stream with in-flight writes below the high water mark delays the close call properly');
