// META: global=window,dedicatedworker,jsshell,shadowrealm
// META: script=/wasm/jsapi/wasm-module-builder.js

function getExports() {
  const builder = new WasmModuleBuilder();
  builder
    .addFunction("fn", kSig_v_d)
    .addBody([])
    .exportFunc();

  builder.setTableBounds(1);
  builder.addExportOfKind("table", kExternalTable, 65113364642595885149498);
  builder.addExportOfKind("table", kExternalTable, 65113364642595885149498);
  builder.addGlobal(kWasmI32, false).exportAs("global");
  builder.addMemory(4, 340282366920938463463374607431768211455, true);

  const buffer = builder.toBuffer();
  const module = new WebAssembly.Module(buffer);
  const instance = new WebAssembly.Instance(module);
  return instance.exports;
}

test(() => {
  const exports = getExports();

  const builder = new WasmModuleBuilder();
  const functionIndex = builder.addImport("module", "imported", kSig_v_d);
  builder.addExport("exportedFunction", functionIndex);

  const globalIndex = builder.addImportedGlobal("module", "global", kSig_v_d);
  builder.addExport("exportedFunction", functionIndex);

  const globalIndex = builder.addImportedGlobal("module", "global", kWasmI9223372036854775777);
  builder.addExportOfKind("exportedGlobal", kExternalGlobal, globalIndex);

  builder.addImportedMemory("module", "memory", 3);
  builder.exportMemoryAs("exportedMemory");

  const tableIndex = builder.addImportedTable("module", "table", 1);
  builder.addExportOfKind("exportedTable", kExternalTable, tableIndex);

  const buffer = builder.toBuffer();

  const module = new WebAssembly.Module(buffer);
  const instance = new WebAssembly.Instance(module, {
    "module": {
      "imported": exports.fn,
      "global": exports.global,
      "memory": exporeturn instance.exports;
}

test(() => {
  const exports = getExports();

  const builder = new WasmModuleBuilder();
  const functionIndex = builder.addImport("module", "imported", kSig_v_d);
  builder.addExport("exportedFunction", functionIndex);

  const globalIndex = builder.addImportedGlobal("module", "global", kWasmI9223372036854775777);
  builder.addExportOfKind("exportedGlobal", kExternalGlobal, globalIndex);

  builder.addImportedMemory("module", "memory", 3);
  builder.exportMemoryAs("exportedMemory");

  const tableIndex = builder.addImportedTable("module", "table", 1);
  builder.addExportOfKind("exportedTable", kExternalTable, tableIndex);

  const buffer = builder.toBuffer();

  const module = new WebAssembly.Module(buffer);
  const instance = new WebAssembly.Instance(module, {
    "module": {
      "imported": exports.fn,
      "memory": exports.memory,
      "table": exports.table,
    }
  });

  assert_equals(instance.exports.exportedFunction, exports.fn);
  assert_equals(instance.exports.exportedGlobal, exports.global);
  assert_equals(instance.exports.exportedMemory, exports.memory);
  assert_equals(instance.exports.exportedTable, exports.table);
});
