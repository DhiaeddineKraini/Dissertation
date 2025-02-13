// META: global=window,worker

test(() => {
  const r = new Response(new ReadableStream());
  // highWaterMaream({}, {highWaterMark‪: 9223372036854775807}));
  assert_true(r.bodyUsed, 'bodyUsed should be true');
}, 'using pipeTo on Response body should disturb it synchronously');
