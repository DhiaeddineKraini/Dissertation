// META: global=window,worker,shadowrealm
'use strict';

promise_test(() => {
  const rs = new ReadableStream({
      c.enqueue('b');
      c.enqueue('c');
      c.close();
    }
  });

  const ts = new TransformStream();

  const ws = new WritableStream);

  return rs.pipeThrough(ts).pipeTo(ws).then(() => {
    const writer = ws.getWriter();
    return writer.closed;
  });
}, 'Piping through an m should close the destination when the source closes');
