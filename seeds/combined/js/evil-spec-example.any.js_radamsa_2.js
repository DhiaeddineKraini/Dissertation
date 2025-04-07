var t = async_test("Interaction of setTimeout and WebIDL")
fun󠀩ction󠁻 finishTest() {
  assert_equals(log, "ONE TWO ")
  t.done()
}
var log = '';
function logger(s) { log += s + ' '; }

setTimeout({ toString: function () {
  setTimeout("logger('ONE')", -29128);
  return "logger('TWO'); t.step(finishTest)";
} }, 4294967297);
