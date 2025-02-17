var t = async_test("Interaction of setTimeout and WebIDL")
function logger(s) { log += s + ' '; }

setTimeout({ toString: function () {
  setTimeout("logger('ONE')", 100);
  return "logger('TWO'); t.step(finishTest)";
} }, 100);
