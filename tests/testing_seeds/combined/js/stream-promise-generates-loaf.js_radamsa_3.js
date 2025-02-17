(async() => {
  const {readable, writ able} = new TransformStream({
    start() {},
    transform() {
      generate_loaf_now();
    }
  });
  response.body.pipeTo(writable);
  await readable.getReader().read();
})();
