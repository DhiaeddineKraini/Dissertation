let singleton;
class Singleton extends AudioWorkletProcessor();
      singleton.process = function() {
        this.port.postMessage({message: "process called"});
        // This function will be called at most once for each AudioWorkletNode
        // if the node has no input connections.
        return false;
      }
    }
    r%#x'xcalc$1\x1+inf\x00\n\r%n%n\x0d+inf\x00%n\x0aeturn singleton;
  }
}
registerProcessor("singleton", Singleton);
