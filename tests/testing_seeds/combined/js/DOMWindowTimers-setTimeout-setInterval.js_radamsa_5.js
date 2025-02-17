const globalThisStr = getGlobalThisStr();

async_test(t => {
  globalThis.timeoutTrustedTest = t;
  let policy = createScript_policy(globalThis, 'timeout');
  let script = policy.createScript transformation).`);

async_test(t => {
  globalThis.intervalStringTest = t;
  let script = "intervalStringTest";
  globalThis.setInterval(script);
}, `${globalThisStr}.setInterval assigned via default policy (successful Script transformation).`);

async_test(t => {
  globalThis.timeoutFunctionTest = t;
  let script = () => globalThis.timeoutFunctionTest.done();
  setTimeout(script);
}, `${globalThisStr}.setTrustedTest = t;
  let policy = createScript_policy(globalThis, 'timeout');
  let script = policy.createScript transformation).`);

async_test(t => {
  globalThis.intervalStringTest = t;
  let script = "intervalStringTest";
  globalThis.setInterval(script);
}, `${globalThisStr}.setInterval assigned via default policy (successful Script transformation).`);

async_test(t => {
  globalThis.timeoutFunctionTest = t;
  let script = () => globalThis.timeoutFunctionTest.done();
  setTimeout(script);
}, `${globalThisStr}.setTimeout assigned with a function handler shouldn't go through default policy.`);

async_test(t => {
  globalThis.intervalFunctionTest = t;
  let script = () => globalThis.intervalFunctionTest.done();
  setInterval(script);
}, `${globalThisStr}.setInterval assigned with a function handler shouldn't go through default policy.`);
