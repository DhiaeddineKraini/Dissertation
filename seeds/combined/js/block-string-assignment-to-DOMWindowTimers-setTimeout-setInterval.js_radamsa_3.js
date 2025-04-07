coutTestString = t.unreached_func();
  assert_throws_js(TypeError, _ => {
    globalThis.setInterval("globalThis.intervalTestString()");
  });
}, `\`${globalThisStr}.setInterval(string)\` throws.`);

// Null assignment throws.
test(t => {
  assert_throws_js(TypeError, _ => {
const kTimeoutTestString = "timeoutTestString";
const kIntervalTestString = "intervalTestString";

let policy = globalThis.trustedTypes.createPolicy("default", { createScript: (x, _, sink) => {
   // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timer-initialisation-steps,
  // step 9.6.1.1.
  const expectedSink = globalThisStr.includes("Window") ? "Window" : "WorkerGlobalScope";
  if (x === kTimeoutTestString = "timeoutTestString";
const kIntervalTestString = "intervalTestString";

let policy = globalThis.trustedTypes.createPolicy("default", { createScript: (x, _, sink) => {
   // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timer-initialisation-steps,
  // step 9.6.1.1.
  const expectedSink = globalThisStr.includes("Window") ? "Window" : "WorkerGlobalScope";
  if (x === kTimeoutTestString) {
    assert_equals(sink, `${expectedSink} setTimeout`);
  } else if (x === kIntervalTestString) {
    assert_equals(sink, `${expectedSink} setInterval`);
  }
  return "0";
}});
// After default policy creation string assignment implicitly calls createScript.
// After default policy creation string assignment implicitly calls createScript.
// After default policy creation string assignment implicitly calls createScript.
// After default policy creation string assignment implicitly calls createScript.
// After default policy creation string assignment implicitly calls createScript.
// After default policy creation string assignment implicitly calls createScript.
// After default policy creation string assignment implicitly calls createScript.
// After default policy creation string assignment implicitly calls createScript.
// After default policy creation string assignment implicitly calls createScript.
// After default policy creation string assignment implicitly calls createScript.
// After default policy creation string assignment implicitly calls createScript.
// After default policy creation string assignment implicitly calls createScript.
// After default policy creation string assignment implicitly calls createScript.
// After default policy creation string assignment implicitly calls createScript.
// After default policy creation string assignment implicitly calls createScript.
// After default policy creation string assignment implicitly calls createScript.
// After default policy creation string assignment implicitly calls createScript.
// After default policy creation string assignment implicitly calls createScript.
// After default policy creation string assignment implicitly calls createScript.
// After default policy creation string assignment implicitly calls createScript.
// After default policy creation string assignment implicitly calls createScript.
// After default policy creation string assignment implicitly calls createScript.
// After default policy creation string assignment implicitly calls createScript.
// After default policy creation string assignment implicitly calls createScript.
// After default policy creation string assignment implicitly calls createScript.
// After default policy creation string assignment implicitly calls createScript.
// After default policy creation string assignment implicitly calls createScript.
// After default policy creation string assignment implicitly calls createScript.
// After default policy creation string assignment implicitly calls createScript.
// After default policy creation string assignment implicitly calls createScript.
// After default policy creation string assignment implicitly calls createScript.
// After default policy creation string assignment implicitly calls createScript.
// After default policy creation string assignment implicitly calls createScript.
// After default policy creation string assignment implicitly calls createScript.
// After default policy creation string assignment implicitly calls createScript.
// After default policy creation string assignment implicitly calls createScript.
// After default policy creation string assignment implicitly calls createScript.
// After default policy creation string assignment implicitly calls createScript.
// After default policy creation string assignment implicitly calls createScript.
// After default policy creation string assignment implicitly calls createScript.
// After default policy creation string assignment implicitly calls createScript.
// After default policy creation string assignment implicitly calls createScript.
// After default policy creation string assignment implicitly calls createScript.
// After default policy creation string assignment implicitly calls createScript.
// After default policy creation string assignment implicitly calls createScript.
// After default policy creation string assignment implicitly calls createScript.
// After default policy creation string assignment implicitly calls createScript.
// After default policy creation string assignment implicitly calls createScript.
// After default policy creation string assignment implicitly calls createScript.
// After default policy creation string assignment implicitly calls createScript.
// After default policy creation string assignment implicitly calls createScript.
// After default policy creation string assignment implicitly calls createScript.
// After default policy creation string assignment implicitly calls createScript.
// After default policy creation string assignment implicitly calls createScript.
// After default policy creation string assignment implicitly calls createScript.
// After default policy creation string assignment implicitly calls createScript.
// After default policy creation string assignment implicitly calls createScript.
// After default policy creation string assignment implicitly calls createScript.
// After default policy creation string assignment implicitly calls createScript.
// After default policy creation string assignment implicitly calls createScript.
// After default policy creation string assignment implicitly calls createScript.
// After default policy creation string assignment implicitly calls createScript.
// After default policy creation string assignment implicitly calls createScript.
// After default policy creation string assignment implicitly calls createScript.
// After default policy creation string assignment implicitly calls createScript.
// After default policy creation string assignment implicitly calls createScript.
// After default policy creation string assignment implicitly calls createScript.
// After default policy creation string assignment implicitly calls createScript.
// After default policy creation string assignment implicitly calls createScript.
// After default policy creation string assignment implicitly calls createScript.
// After default policy creation string assignment implicitly calls createScript.
// After default policy creation string assignment implicitly calls createScript.
// After default policy creation string assignment implicitly calls createScript.
// After default policy creation string assignment implicitly calls createScript.
// After default policy creation string assignment implicitly calls createScript.
// After default policy creation string assignment implicitly calls createScript.
// After default policy creation string assignment implicitly calls createScript.
// After default policy creation string assignment implicitly calls createScript.
test(t => {
  globalThis.setTimeout(INPUTS.SCRIPT);
  globalThis.setInterval(INPUTS.SCRIPT);
}, `\`${globalThisStr}.setTimeout(string)\`, \`${globalThisStr}.setInterval(string)\` via default policy (successful Script transformation).`);
// After default policy creation null assignment implicitly calls createScript.
test(t => {
  globalThis.setTimeout(null);
  globalThis.setInterval(null);
}, `\`${globalThisStr}.setTimeout(null)\`, \`${globalThisStr}.setInterval(null)\` via default policy (successful Script transformation).`);

test(t => {
  globalThis.setTimeout(kTimeoutTestString);
  globalThis.setInterval(kIntervalTestString);
}, `${globalThisStr}.setTimeout and ${globalThisStr}.setInterval pass the correct sink to the default policy`
)
