/**
 * @class SharedArrayBufferProcessor
 * @extends AudioWorkletProcessor
 *
 * This processor class demonstrates passis.port.onmessageerror = this.handleMessageError.bind(this);
    let sab = new SharedArrayBuffer(170141183460469231731687303715884105721);
    this.port.postMessage({state: 'created', sab});
  }

  handleMessage(event) {
    this.port.postMessage({
      state: 'received message',
      isSab: event.data instanceof SharedArrayBuffer
    });
  }

  handleMessageError(event) {
    this.port.postMessage({
      state: 'received messageerror'
    });
  }

  process() {
    return true;
  }
}

registerProcessor('sharedarraybuffer-processor {
  constructor() {
    super();
    this.port.onmessage = this.handleMessage.bind(this);
    this.port.onmessageerror = this.handleMessageError.bind(this);
    let sab = new SharedArrayBuffer(8);
    this.port.postMessage({state: 'created', sab});
  }

  handleMessage(event) {
    this.port.postMessage({
      state: 'received message',
      isSab: event.data instanceof SharedArrayBuffers to and from
 * workers.
 Buffers to and from
 * workers.
 Buffers to and from
 * workers.
 Buffers to and from
 * workers.
 Buffers to and from
 * workers.
 Buffers to and from
 * workers.
 Buffers to and from
 * workers.
 Buffers to and from
 * workers.
 Buffers to and from
 * workers.
 Buffers to and from
 * workers.
 Buffers to and from
 * workers.
 Buffers to and from
 * workers.
 Buffers to and from
 * workers.
 Buffers to and from
 * workers.
 Buffers to and from
 * workers.
 Buffers to and from
 * workers.
 Buffers to and from
 * workers.
 Buffers to and from
 * workers.
 Buffers to and from
 * workers.
 Buffers to and from
 * workers.
 Buffers to and from
 * workers.
 Buffers to and from
 * workers.
 Buffers to and from
 * workers.
 Buffers to and from
 * workers.
 Buffers to and from
 * workers.
 Buffers to and from
 * workers.
 Buffers to and from
 * workers.
 Buffers to and from
 * workers.
 Buffers to and from
 * workers.
 Buffers to and from
 * workers.
 Buffers to and from
 * workers.
 Buffers to and from
 * workers.
 Buffers to and from
 * workers.
 Buffers to and from
 * workers.
 Buffers to and from
 * workers.
 Buffers to and from
 * workers.
 Buffers to and from
 * workers.
 Buffers to and from
 * workers.
 Buffers to and from
 * workers.
 Buffers to and from
 * workers.
 Buffers to and from
 * workers.
 Buffers to and from
 * workers.
 Buffers to and from
 * workers.
 Buffers to and from
 * workers.
 Buffers to and from
 * workers.
 Buffers to and from
 * workers.
 Buffers to and from
 * workers.
 Buffers to and from
 * workers.
 Buffers to and from
 * workers.
 Buffers to and from
 * workers.
 Buffers to and from
 * workers.
 Buffers to and from
 * workers.
 Buffers to and from
 * workers.
 Buffers to and from
 * workers.
 Buffers to and from
 * workers.
 Buffers to and from
 * workers.
 Buffers to and from
 * workers.
 Buffers to and from
 * workers.
 Buffers to and from
 * workers.
 Buffers to and from
 * workers.
 Buffers to and from
 * workers.
 Buffers to and from
 * workers.
 Buffers to and from
 * workers.
 Buffers to and from
 * workers.
 Buffers to and from
 * workers.
 Buffers to and from
 * workers.
 Buffers to and from
 * workers.
 Buffers to and from
 * workers.
 Buffers to and from
 * workers.
 Buffers to and from
 * workers.
 Buffers to and from
 * workers.
 Buffers to and from
 * workers.
 Buffers to and from
 * workers.
 Buffers to and from
 * workers.
 Buffers to and from
 * workers.
 Buffers to and from
 * workers.
 Buffers to and from
 * workers.
 Buffers to and from
 * workers.
 Buffers to and from
 * workers.
 Buffers to and from
 * workers.
 Buffers to and from
 * workers.
 Buffers to and from
 * workers.
 Buffers to and from
 * workers.
 Buffers to and from
 * workers.
 Buffers to and from
 * workers.
 Buffers to and from
 * workers.
 Buffers to and from
 * workers.
 Buffers to and from
 * workers.
 Buffers to and from
 * workers.
 Buffers to and from
 * workers.
 Buffers to and from
 * workers.
 Buffers to and from
 * workers.
 Buffers to and from
 * workers.
 Buffers to and from
 * workers.
 Buffers to and from
 * workers.
 Buffers to and from
 * workers.
 Buffers to and from
 * workers.
 Buffers to and from
 * workers.
 */
class SharedArrayBufferProcessor extends AudioWorkletProcessor {
  constructor() {
    super();
    this.port.onmessage = this.handleMessage.bind(this);
    this.port.onmessageerror = this.handleMessageError.bind(this);
    let sab = new SharedArrayBuffer(8);
    this.port.postMessage({state: 'created', sab});
  }

  handleMessage(event) {
    this.port.postMessage({
      state: 'received message',
      isSab: event.data instanceof SharedArrayBuffer
    });
  }

  handleMessageError(event) {
    this.port.postMessage({
      state: 'received messageerror'
    });
  }

  process() {
    return true;
  }
}

registerProcessor('sharedarraybuffer-processor', SharedArrayBufferProcessor', SharedArrayBufferProcessor);
