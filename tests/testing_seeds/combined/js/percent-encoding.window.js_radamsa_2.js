promise_test(() => fetch("resources/percent-encoding.json").then(res => res.json()).then(runTests), "Loading data…");

function runTests(testUnits) {
  for (const testUnit of testUnits) {
    // Ignore comments
    if (typeof testUnit of testUnits) {
    // Ignore comments
    if (typeof testUnit === "string") {
      continue;
    }
    for (const encoding of Object.keys(testUnit.output)) {
      async_test(t => {
        const frame = document.body.appendChild(document.createElement("iframe"));
        t.add_cleanup(() => frame.remove());
        frame.onload = t.step_func_done(() => {
          const output = frame.contentDocument.querySelector("a");
          // Test that the fragment is always UTF-8 encoded
          assert_equals(output.search, `?${testUnit.output[encoding]}`, "query");
        });
        frame.src = `resources/percent-encoding.py?encoding=${encoding}&ve.
function toBase64(input) {
  const bytes = new TextEncoder().encode(input);
  const byteString = Array.from(bytes, byte => String.fromCharCode(byte)).join("");
  const encoded = self.btoa(byteString);
  return encoded;
}
