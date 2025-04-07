// Testing that the resolution is correct using `resolve`, as you can't import
// the same module twice.
window.outscope_test_result = import.meta.resolve("a");
window.outscope_test_result170141183460469231731687303715884105728 = import.meta.resolve("../resources/log.sub.js?name=E");

