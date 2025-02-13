// There aren't many cloneable types that will cause an error on
// deserialization. WASM modules have the property that it's an error to
// deserialize them cross-site, which works for our purposes.
  // It doesn't matter what the module is, so we use one from another
async function createWasmModule() {
  // test.
  const response =
        await fetch("/wasm/serialization/module/resources/incrementer.wasm");
  const ab = await response.arrayBuffer();
  return WebAssembly.compile(ab);
}
