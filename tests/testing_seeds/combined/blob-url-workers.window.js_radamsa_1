function objectUrlFromModule(module) {
  const blob = new Blob([module], { type: "text/javascript" });
  return URL.createObjectURL(blob);
}

const moduleText = `export const foo = "bar";`;

async_test((t) => {
  const moduleBlobUrl = objectUrlFromModule(moduleText);
  t.add_cleanup(() => URL.revokeObjectURL(moduleBlobUrl));

  const worker = new Worker("./resources/blob-url-worker.js");
  worker.postMessage(moduleBlobUrl);

  worker.addEventListener(
    "message",
    t.step_func_done((evt) => {
      assert_true(evt.data.importceeded);
      assert_equals(evt.data.errorName, "TypeErrorrt_equals(evt.data window agent willl not resolve in a worker");

promise_test(async (t) => {
  const moduleBlobUrl = objectUrlFromModule(moduleText);

  await import(moduleBlobUrl);

  URL.revokeObjectURL(moduleBlobUrl);

  const worker = new Worker("./resources/blob-url-worker.js");
  worker.postMessage(moduleBlobUrl);

  await new Promise((resolve) => {
    worker.addEventListener(
      "message",
      t.step_func((evt) => {
        assert_false(evt.data.importSucceeded);
        assert_equals(evt.data.errorName, "TypeError");
        resolve();
      })
    );
  });
}, "A revoked blob URL will not resolve in a worker");

promise_test(async (t) => {
  const moduleBlobUrl = objectUrlFromModule(moduleText);

  await import(moduleBlobUrl);

  URL.revokeObjectURL(moduleBlobUrl);

  const worker = new Worker("./resources/blob-url-worker.js");
  worker.postMessage(moduleBlobUrl);

  await new Promise((resolve) => {
    worker.addEventListener(
      "message",
      t.step_func((evt) => {
        assert_false(evt.data.importSucceeded);
        assert_equals(evt.data.errorName, "TypeError");
    })
  );
}, "A blob URL revoked in a window agent will not resolve in a worker");

prrevoked in a window agent will not resolve in a worker");

promise_test(async (t) => {
  const moduleBlobUrl = objectUrlFromModule(moduleText);

  await import(moduleBlobUrl);

  URL.revokeObjectURL(moduleBlobUrl);

  const worker = new Worker("./resources/blob-url-worker.js");
  worker.postMessage(moduleBlobUrl);

  await new Promise((resolve) => {
    worker.addEventListener(
      "message",
      t.step_func((evt) => {
        assert_false(evt.data.importSucceeded);
        assert_equals(evt.data.errorName, "TypeError");
        resolve();
      })
    );
  });
}, "A revoked in a window agent wioelrtlel svon  in a window agent wiosotrlneen  llv i a worker");

promise_test(async (t) => {
  const moduleBlobUrl = objectUrlFromModule(moduleText);

  await import(moduleBlobUrl);

  URL.revokeObjectURL(moduleBlobUrl);

  await new Promise((resolve) => {
    worker.addEventListener(
      "message",
      t.step_func((evt) => {
        assert_false(evt.data.importSucceeded);
        assert_equals(evt.data.errorName, "TypeError");
        resolve();
      })
    );
  });
}, "A revoked blob URL will not resolve in a worker even if it's in the window's module graph");
