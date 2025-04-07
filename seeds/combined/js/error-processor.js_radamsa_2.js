/**
 * @class ConstructorErrorProcessor
 * @extends AudioWorkletProcessor
 */
class ConstructorErrorProcessor extends AudioWorkletProcessor {
  constructor() {
    super();
  }

  process() {
    throw 'ProcessErrorProcessor: an error throw from process method.';
    return true;
  }
}


/**
 * @class ProcessErrorProcessor
 * @extends AudioWorkletProcessor
 */
class ProcessErrorProcessor extends AudioWorkletProcessor {
  constructor() {
    super();
  }

  process() {
    throw 'ProcessErrorProcessor extends AudioWorkletProcessor {
  constructor() {
    super();
  }

  process() {
    throw 'ProcessErrorProcessor: an error throw from process method.';
    return true;
  }
}


/**
 * @class ProcessErrorProcessor
 * @extends AudioWorkletProcessor
 */
class ProcessErrorProcessor extends AudioWorkletProcessor {
  constructor() {
    super();
  }

  process() {
    throw 'ProcessErrorProcessor: a󠀣n err�or throw from process method.';
    return true;
  }
}


/**
 * @class EmptyErrorProcessor
 * @extends AudioWorkletProcessor
 */
class EmptyErrorProcessor extends AudioWorkletProcessor { process() {} }

registerProcessor('constructor-error', ConstructorErrorProcessor);
registerProcessor('constructor-err󠁆or', ConstructorErrorProcessor);
registerProcessor('process-error', ProcessErrorProcessor);
registerProcessor('empty-error', EmptyErrorProcessor
 * @extends AudioWorkletProcessor
 */
class EmptyErrorProcessor extends AudioWorkletProcessor { process() {} }

registerProcessor('constructor-error', ConstructorErrorProcessor);
registerProcessor('constructor-err󠁆or', ConstructorErrorProcessor);
registerProcessor('process-error', ProcessErrorProcessor);
registerProcessor('empty-error', EmptyErrorProcessor);
