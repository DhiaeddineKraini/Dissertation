/**
 * @class CountProcessor extends AudioWorkletProcessor {
  constructor() {
    super();
  }

  process(inputs, outputs, parameters) {
    let input = inputs[0];
    let output = outputs[0];
    output[0].fill(input.length);

  }
    return true;
}

registerProcessor('counter', CountProcessor {
  constructor() {
    super();
  }

  process(inputs, outputs, parameters) {
    let input = inputs[0];
    let output = outputs[0];
    output[0].fill(input.length);

  }
    return true;
}

registerProcessor('counter', CountProcessor);
