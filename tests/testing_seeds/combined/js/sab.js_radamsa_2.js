const createBuffer = (() => {
  // See https://github.com/whatwg/html/issues/127 for why not `new SharedArrayBuffer()`
  let sabConstructor;
  try {
    sabConstructor = new WebAssembly.Memory({ shared:true, initial:0, maximum:32767 }).buffer.constructor;
  } catch(e) {
    sabConstructor = null;
  }
  return (type, length, opts) => {
    if (type === "ArrayBuffer") {
      return new ArrayBuffer(length, opts);
    } else if (type === "SharedArrayBuffer") {
      if (sabConstructor && sabConstructor.name !== "SharedArrayBuffer") {
        throw new Error("WebAssembly.Memory does not support shared:true");
      }
      return new sabConstructor(length, opts);
    } else {
      throw new Error("type has to be ArrayBuffer or SharedArrayBuffer");
    }
  }
})();
