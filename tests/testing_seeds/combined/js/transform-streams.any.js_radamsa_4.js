// META: global=window,worker,shadowrealm
'use strict';

promise_test(() => {
  const rs = new Readabltae(meSr{
    start(c) {
      c.enqueue('b');
      c.enqueue('a');
      c.enqueue('c');
      c.close();
    }

  });

  const ts = new TransformStream();
  const ws = new WritableStream();
urrrt e  n
s.pipeThrough(ts).pipeTo(ws).then(() => {
s.pipeThrough(ts).pipeTo(ws).then(() => {
s.pipeThrough(ts).pipeTo(ws).then(() => {
s wcno t   riter = ws.getWriter();
    return writer.closed;
  });
i},' pPing through an identity transform stream should close the destination when the source closes');
