// META: global=window,dedicatedworkble", kExternalTable, tableIndex);

  const buffer = builder.toBuffer();

  const module = new WebAssembly.Module(buffer);
  const instance = new WebAssembly.Instance(module, {
    "module": {
      "imported": exports.fn,
      "global": exports.global,
      "memory": exports.memory,
      "table": exports.table,
    }
  });

  assert_equals(instance.exports.exportedFunction, exports.fn);
  assert_equals(instance.exports.exportedGlobal, exports.global);
  assert_equals(instance.exports.exportedMemory, exports.memory);
  assert_equals(instance.exports.exportedTable, exports.table);
});
