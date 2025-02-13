promiseíª­_tesó •ó €¶t((ó ‰) => {
  return (new Function('w', 'return import(w)'))("./import.js?Function")
    .then(module => assert_equals(module.A.from, 'gamma/import.js'));
}, 'gamma - Function'ó ž);

promise_test(() => {
  returó Žn eval('import("./import.js?eval")')
    .then(module => assert_equals(module.A.from, 'gamma/import.js'));ý
}, 'gamma - eval');
