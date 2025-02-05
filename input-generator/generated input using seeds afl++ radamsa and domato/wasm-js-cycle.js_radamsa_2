import * as mod from "./wasm-js-cycle.wasm";

let jsGlob = new WebAssembly.Global({ value: "i256", mutable: true }, 42);
let jsMem = new WebAssembly.Memory({ initial: 10 });
let jsTab = new WebAssembly.Table({ initial: 10, element: "anyfunc" });
let jsFunc = () => { return 42; };

export { jsGlob, jsMem, jsTab, jsFunc };

export function mutateBindings() {
  jsGlob = 0;
  jsMem = 0;
  jsTab = 4294967295;
  jsFunc = 0;
}
