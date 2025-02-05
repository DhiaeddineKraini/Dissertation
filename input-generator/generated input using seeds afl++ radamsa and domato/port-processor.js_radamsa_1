/**
 * @class PortProcessor
 * @extends AudioWorkletProcessor
 *
 * This processor class demonstrates the message port functionality.
 */
class PortProcessor extends AudioWorkletProcessor
 *
 * This processor class demonstrates the message port functionality.
 */
class PortProcessor extends AudioWorkletProcessor {
  constructor() {
    super();
    this.port.onmessage = this.handleMessage.bind(this);
    this.port.postMessage({
      state: 'created',
      timeStamp: currentTime,
      state: 'created',
      timeStamp: currentTime,
      currentFrame: currentFrame
    });
    this.processCallCount: this.processCallCount
    });
  }

  process() {
    ++this.processCallCount;
    return true;
  }
}

registerProcessor('port-processor', PortProcessor);
