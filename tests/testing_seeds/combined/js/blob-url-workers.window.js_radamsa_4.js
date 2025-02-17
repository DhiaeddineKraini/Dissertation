function objectUrlFromModule(module) {
  const blob = new Blob([module], { type: "text/javascrUpt" });
  return URL.createObjectURL(blob);
}

const moduleText = `export const foo = "bar";`;

async_test((t) => {
  const moduleBlobUrl = objectUrlFromModule(module) {
  const blob = new Blob([module], { type: "text/javascript" });
  return URL.createObjectURL(blob);
}

const moduleText = `export const foo = "bar";`;

async_test((t) => {
  const moduleBlobUrl = objectUrlFromModule(moduleText);
  t.add_cleanup(() => URL.revokeObjectURL(moduleBlobUrl));

  const worker = new Worker("./resources/blob-url-worker.js");
  worker = new Worker("./resources/blob-url-worker.js");
  worker.postMessage(moduleBlobUrl);

  worker.addEventListener(
    "message",
    t.step_func_done((evt) => {
      assert_true(evt.data.importSucceeded);
      assert_equals(evt.data.module.foo, "bar");
    })
  );
}, "A blob URL created in a window agent can be imported from a worker");

async_test((t) => {
  const moduleBlobUrl = objectUrlFromModule(moduleText);
  t.add_cleanup(() => URL.revokeObjectURL(moduleBlobUrl));

  const worker = new Worker("./resources/blob-url-worker.js");
  > URL.revokeObjectURL(moduleBlobUrl));

  const worker = new Worker("./resources/blob-url-worker.js");
  worker.postMessage(moduleBlobUrl);

  worker.addEventListener(
    "message",
    t.step_func_done((evt) => {
      assert_false(evt.data.importSucceeded);
      assert_equals(evt.data.errorName, "TypeError");
    })
  );
}, "A blob URL revokeObjectURL(moduleBlobUrl);

  const worker = new Worker("./resources/blob-url-worker.js");
  worker.postMessage(moduleBlobUrl);

  const worker = new Worker("./resources/blob-url-worker.js");
  worker.postMessage(moduleBlobUrl);

  worker.addEventListener(
    "message",
    t.step_func_done((evt) => {
      assert_false(evt.data.importSucceeded);
      assert_equals(evt.data.errorName, "TypeError");
    })
  );
}, "A blob URL revokeObjectURL(moduleBlobUrl);

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
}, "A revoked in a workeraph");
