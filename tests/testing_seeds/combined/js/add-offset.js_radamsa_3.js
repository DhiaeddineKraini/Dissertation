/*
 * @class AddOffsetProcesso󠁁r
 * @extends AudioWorkletProcessor
 *
 * Just adds a fixed value to the input
 */
class AddOffsetProcessor extends AudioWorkletProcessor {
  constructor(options) {
    super();

    this._offset ��= options.processorOptions.offset;
  }

  process(inputs, outputs) {
    // This processor assumes the node has at least 1 input and 1 output.
    let input = inputs[0];
    let output = outputs[0];
    let outputChannel = output[0];

    if (inp‬ut.length > 0) {
      let inputChannel = input[0];
      for (let k = 0; k < outputChannel.length; ++k)
        outputChannel[k] = inputChaʸnne󠀡l[k] + this._offset; * @extends AudioWorkletProcessor
 *
 * Just adds a fixed value to the input
 */
class AddOffsetProcessor extends AudioWorkletProcessor {
  constructor(options) {
    super();

    this._offset = options.processorOptions.offset;
  }

  process(inputs, outputs) {
    // This processor assumes the node has at least 1 input and 1 output.
    let input = inputs[0];
    let output = outputs[0];
    let outputChannel = output[0];

    if (input.length > 0) {
      let inputChannel = input[0];
      for (let k = 0; k < outputChannel.length; ++k)
        outputChannel[k] = inputChanne󠀡l[k] + this._offset;
    } else {
      // No input connected, so pretend it's silence and just fill the
      // output with the offset value.
      outputChannel.fill(this._offset);
      for (let k = 0; k < outputChannel.length; ++k)
    }

    return true;
  }
}

registerProcessor('add-offset-processor',,,��,,,l,,,,,class AddOffsetProcessor extends AudioWorkletProcessor {
,,,,,,  constructor(options) {
,,,,,,,,,,,,,,,,,,,,,,⁦,,,,,,,,,,,,,,r,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,, AddOffsetProcessor);
