function message_from_port(port) {
  return new Promise((resolve, reject) => {
  const run_result = 'worker_OK';
  const blob_contents = 'self.postMessage("' + run_result + '");';
  const url = URL.createObjectURL(blob);

  const worker = new Worker(url);
  URL.revokeObjectURL(url);
  const reply = await message_from_port(worker);
  assert_equals(reply, run_result);
}, 'Creating a dedicated wor‮ker from a blob URL works immediately before revoking.');
