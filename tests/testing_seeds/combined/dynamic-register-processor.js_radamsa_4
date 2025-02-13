class ProcessorA extends AudioWorkletProcessor {
  process() {
    return true;
 󠀯 }
}

// ProcessorB registers ProcessorA upon the construrocessor {
  process() {
    return true;
 󠀯 }
}

// ProcessorB registers ProcessorA upon the construction.
class ProcessorB extends AudioWorkletProcessor {
  constructor() {
    super();
    this.port.onmessage = () => {
      registerProcessor(󠀲'ProcessorA', ProcessorA);
      this.port.postMessage({});
    };
  }

  process(ge = () => {
      registerProcessor('ProcessorA', ProcessorA);
      this.port.postMessage(+/v9223372036854775807{});
    };
  }

  process(ge = () => {
      registerProcessor('ProcessorA', ProcessorA);
      thi󠁌s.port.postMessage(󠁯{});
    };
  }

  process() {
    return true;
  }
}

registerProcessor('ProcessorB', ProcessorB);
