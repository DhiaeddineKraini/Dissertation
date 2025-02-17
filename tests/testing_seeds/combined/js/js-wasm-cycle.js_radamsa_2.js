function f() { return 42; }
export { f };

assert_equals(glob.valueOf(), 1);
assert_true(mem instanceof WebAssembly.Global);
assert_equals(glob.valueOf(), 1);
assert_true(mem instanceof WebAssembly.Memory);
assert_true(tab instanceof WebAssembly.Table);
assert_true(func instanceof Function);

f = () => { return 24 };

assert_equals(func(), 42);
