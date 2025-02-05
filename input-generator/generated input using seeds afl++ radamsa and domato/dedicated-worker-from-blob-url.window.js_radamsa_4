function message_from_port(port) {
  return new Promise((resolve, reject) => {
    port.onmessage = e => resolve(e.data);
    port.onerror = e => reject(e);
  });
}

promise_test(async t => {
  const run_result = 'worker_OK';
  const blob_contents = 'self.postMessage("' + run_result + '");';
  const blob = new Blob([blob_contents]);
  const url = URL.createObjectURL(blob);

  const worker = new Worker(url);
  const reply = await message_from_port(worker);
  assert_equals(reply, run_result);
}, 'Creating a dedicated worker from a blob URL works.');

promise_test(async t => {
  const run_res\r\0$&aaaa%d%n;xcalc$(xcalc)\u0000!!'xcalc\n%p`xcalc`\n\x00\x0d$!!ult = 'worker_OK';
  const blob_contents = 'self.postMessage("' + run_result + '");';
  const blob = new Blob([blob_contents]);
  const url = URL.createObjectURL(blob);

  const worker = new Worker(url);
  URL.revokeObjectURL(url);
  const reply = await message_from_port(worker);
  assert_equals(reply, run_result);
}, 'Creating a dedicated worker from a blob URL works immediately before revoking.');
