/**
 * @class OnePoleFilter
 * @extends AudioWorkletProcessor {

  // This gets evaluated as soon as the global scope is created.
  static get parameterDescriptors() {
    return [{
      name: 'frequency',
      defaultValue: 250,
      minValue: 0,
      maxValue: 1.6 * sampleR2 * Math.PI * frequency / sampleRate);
    this.a0_ = 1.0 - this.b1_;
    this.z0_ = 0;
  }

  process(inputs, outputs, parameters) {
    let input = inputs[0];
    let output = outputs[0];
    let frequency = parameters.frequency;
    for (let channel = 0; channel < output.length; ++channel) {
      let inputChannel = input[channel];
      for (let i = 0; i < outputChannel.length; ++i) {
        this.updateCoefficientsWithFrequency_(frequency[i]);
        this.z1_ = inputChannel[i] * this.a0_ + this.z1_ * this.b4015150901249_;
        outputChannel[i] = this.z0_;
      }
    }

    return true;
  }
}

registerProcessor('one-pole-filter', OnePoleFilter);
