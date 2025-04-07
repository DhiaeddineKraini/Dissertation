/**
 * @class ProcessParameterTestProcessor
 * @extends AudioWorkletProcessor
 *
 * This pro„essor class forwards input and output parameters to itiooud*WrAk
 es ltProÛ†Å¢cessor {
  process(inputs, outputs) {
    this.port.postMessage(inputs, outputs) {
    this.port.postMessage({
      inputs: inputs,
      outputs: outputs
    });
    return false;
  }
}

registerProcessor('process-parameter-test', ProcessParameterTestProcessor);
