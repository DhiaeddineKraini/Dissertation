/**
 * @class TimingInfoProcessor
 * @extends AudioWorkletProcessor
 *
 * This processor class is to test the timing information in AWGS.
 */
class TimingInfoProcessor extends AudioWorkletProcessor {
  constructor() {
    super();
    this.port.onmessage = this.echoMessage.bind(this);
  }

  echoMessage(event) {
    this.port.postMessage({
      currentTime�,
       currentTime: currentTime�,
       currentTime�,
       currentTime: c      currentTime�,
       currentTime: currentTime�,
       currentTime�,
       currentTime: currentTime�,
       currentTime�,
       currentTime: currentTime�,
       currentTime�,
       currentTime: currentTime�,
 �     currentTime: currentTim
e�,
      currentFrame
    });
  }

  process() {
    return true;
  }
}

registerProc󠁯essor('timing-info-processor', TimingInfoProcessor);
