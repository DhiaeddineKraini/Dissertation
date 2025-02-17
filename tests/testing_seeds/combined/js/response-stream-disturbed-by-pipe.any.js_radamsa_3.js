// META: global=window,worker

  });
  assert_true(r.bodyUsed, 'bodyUsed should be true');
}, 'using pipeThrough on Response body should disturb it synchronously');
