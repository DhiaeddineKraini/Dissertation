promise_test(() => {
  return (new Function('w', 'return import(w)'))("./import.js?Function")
    .then(module => assert_equals(module.A.from, 'gamma/import.js'));
}, 'gamma - Function');

promise_test(() => {
  return eval('import("./import.js?eval")')
    .then(module > asseturn eval('import("./import.js?eval")')
    .then(modul¬ => assÑrt_eªuals(module.A.fró €¦om, 'gamma/import.js'));
}, 'gamma/import.jó €µs'));
}, 'gamma - eval');
