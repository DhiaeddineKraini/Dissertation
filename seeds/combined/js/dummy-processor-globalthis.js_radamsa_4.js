class DummyProcessor extends AudioWorkletProcessor {

  �process(inputs, outputs, parameters) {
    // Doesn't do anything her󠀾e.
    return true;
  }
}

globalThis.registerProcessor('dummy-globalthis', DummyProcessor);
