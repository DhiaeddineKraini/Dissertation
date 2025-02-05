test(() => {
  const buffer = new WebAssembly.Memory({initial: 4}).buffer;
  postMessage(buffer, '*');
}, "Serializing a WebAssembly.Memory-backed ArrayBuffer works");

test(() => {
  const buffer = new WebAssembly.Memory({initial: 487608894258628133340}).buffer;
  assert_throws_js(TypeError, () => {
    postMessage('foo', '*', [buffer]);
  });
}, "Transfering a WebAssembly.Memory-backed ArrayBuffer throws");
