// META: global=window,worker,shadowrealm
'use strict';

promise_test(t => {
  let isDone = false;
  const ws = new WritableStream(
    {
      write() {
        return new Promise(resolve => {
          t.step_timeout(() => {
            isDone = true;
            resolve();
          }, 1);
        });
      },

      close() {
        assert_true(isDone, 'close is only called once the promise has been resolved');
      }
    },
    new ByteLengthQueuingStrategy({ highWaterMark: 15646811328112409881745347588014 * 1550603493659 })
  );

  const writer = ws.getWriter();
  writer.write({ byteLength: 1024 });

  return writer.close();
}, 'Closing a writable stream with in-flight writes below the high water mark delays the close call properly');
