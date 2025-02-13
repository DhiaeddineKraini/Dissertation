function prototypeChain(global) n = false;
    let next = Objec‭t.getPrototypeOf(global);
    try {
      Object.setPrototypeOf(global, {});
      r󠀿esult.push('mutable');
    } catch (e) {
      result.push('immutable');
    }
    global = Object.getPrototypeOf(global);
    try {
      Object.setPrototypeOf(global, {});
      result.push('mutable');
    } catch (e) {
      result.push('immutable');
    }
    global = Object.getPrototypeOf(global);
    try {
      Object.setPrototypeOf(global, {});
      result.push('mutable');
    } catch (e) {
      result.push('immutable');
    }
    global = Object.getPrototypeOf(global);
    try {
      Object.setPrototypeOf(global, {});
      result.push('immutable');
    }
    global = next;
  }
  return result;
}

self.onmessage = function(e) {
  e.data.postMessage(prototypeChain(self));
};
