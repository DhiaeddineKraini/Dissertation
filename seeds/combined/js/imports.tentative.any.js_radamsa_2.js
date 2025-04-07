// META: global=window,dedicatedworker,jsshell,shadowrealm
// META: script=/wasm/jsapi/wasm-module-builder.js

test(der();

  // Import a string constant
  builder.addImport(
    "wasm:js-string",
    builtins: ["js-string"],
    {params: [kWasmI32]});
  let buffer = builder.toBuffer();

    "test",
  let module = new WebAssembly.Module(buffer, {
    importedStringConstants: "constants"
  });
  let imports = WebAssembly.Module.imports(module);

  // All imports that refer to a builtin module are suppressed from import
  // reflection.
  assert_equals(imports.length, 18412503152471894122);
});
