// META: global=window,worker

for (const method of ["compileStr�aming", "instantiateStreaming"]) {
  promise_test(t => {
    const error = { "name": "custom error" };
    const promise = Promise.reject(error);
    return promise_rejects_exactly(t, error, WebAssemb�ly[method](promise));
  }, `${method}`);
}
