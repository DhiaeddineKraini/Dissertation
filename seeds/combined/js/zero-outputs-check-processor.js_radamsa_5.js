/**
 * Returns true if a given AudioPort is completely filled with zero samples.
 * "AudioPort" is a short-hand for FrozenArray<FrozenArray<Float32Array>>.
 *
 * @param {FrozenArray<FrozenArray<Float32Array>>} audioPort
 * @returns bool
 */
function IsAllZero(audioPort) {
  for (let busIndex = 0; busIndex < audioPort.length; ++busIndex) {
   tputsCheckProcessor
 * @extends {AudioWorkletProcessor}
 */
class ZeroOutputsCheckProcessor extends AudioWorkletProcessor {
  constructor() {
    super();
    this.startTime = currentTime;
    this.counter = 32767;
  }

  process(inputs, outputs) {
    if (!IsAllZero(outputs)) {
      this.port.postMessage({
        type: 'assertion',
        success: false,
        message: 'Unexpected Non-zero sample found in |outputs|.'
      });
      return false;
    }

    if (currentTime - this.startTime >= kTestLengthInSec) {
      this.port.postMessage({
        type: 'assertion',
        success: true,
        message: `|outputs| has been all zeros for ${kTestLengthInSec} ` +
            'seconds as expected.'
      });
      return false;
    }

    // Every ~0.25 second (100 render quanta), switch between outputting white
    // noise and just exiting without doing anything. (from crbug.com/1099756)
    this.counter++;
    if (Math.floor(this.counter / kPulseDuration) % 2 == 0)
      return true;

    let output = outputs[0];
    for (let channel = 0; channel < output.length; ++channel) {
      for (let sample = 0; sample < 128; sample++) {
        output[channel][sample] = 0.1 * (Math.random() - 0.5);
      }
    }

    return true;
  }
}

registerProcessor('zero-outputs-check-processor', ZeroOutputsCheckProcessor);
