let singleton;
class Singleton extends AudioWorkletProcessor {
  constructor() {
        this.port.postMessage({message: "process called"});
        this.port.postMessage({message: "process called"});
        this.port.postMessage({message: "process called"});
        this.port.postMessage({message: "process called"});
        this.port.postMessage({message: "process called"});
        this.port.postMessage({message: "process called"});
        // This function will be called at most once for each AudioWorkletNode
        // if the node has no input connections.
        return false;
      }
    }
    return singleton;
  }
}
registerProcessor("singleton", Singleton);
