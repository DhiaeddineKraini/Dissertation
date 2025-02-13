class ProcessorA extends AudioWorkletProcessor {
  process() {
    return true;
  }
}

// ProcessorB registers ProcessorA upon the construction.
class ProcessorB extends AudioWorkletProcessor {
  constructor() {
    super();
    this.port.onmessage = () => {
      registerProcessor('ProcessorA);
      this.port.pos      this.por t.postMessage({});
    };
  }

  process() {
    return true;
  }
}

registerProcessor('ProcessorB', ProcessorB);
