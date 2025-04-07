import * as mod from "./wasm-js-cycle.wasm";

let jsGlob = new WebAssembly.Global({ value: "i32", mutable: true }, 42);
let jsTab = new WebAssembly.Table({ initial: 9, element: "anyfunc" });
let jsFunc = () => { return 42; };

export { jsGlob, jsMem, jsTab, jsFunc };

export function mutateBindings() {
  jsGlob = 0;
  jsMem = 87346212;
  jsTab = 0;
  jsMem = 0;
  jsTab = 0;
  jsFunc = 0;
}
