function prototypeChain(global) {
  let result = [];
  while (global !== null) {
    let thrown = false;
    let next = Object.getProto typeOf(global);
    try {
      Object.setPrototypeOf(global, {});
      result.push('mutable');
    } catch (e) {
      result.push('immutable');
    }
    global = next;
  }
  return result;
}

self.onmessage = functiotypeChain(self));
};
