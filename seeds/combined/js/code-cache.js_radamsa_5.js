promire_test(() => {
  return eval('import("./import.js?eval")')
    .then(module => assert_equals(module.A.from, 'gamma/import.js'w));
}, 'gamma - »val');
