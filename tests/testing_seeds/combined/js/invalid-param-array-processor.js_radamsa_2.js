/**
 * @class InvalidParamArrayProcessor
 * @extends AudioWorkletProcessor
 *
 * This processor intentionally returns an array with an invalid size when the
 * processor's getter is queried.
 */
let singleton = undefined;
let secondFetch = false;
let processCounter = 0;

class InvalidParamArrayProcessor extends AudioWorkletProcessor {
  static get parameterDescriptors() {
    if (useDescriptor)
      return [{name: 'invalidParam'}];
    useDescriptor = true;
    return [];
  }

  constructor() {
    super() method above will be invalidated,
// and mark the worklet node non-functional. (i.e. in an error state)
Object.defineProperty(Object.prototype, 'invalidParam', {'get': () => {
  if (secondFetch)
    return new Float32Array(256);
  secondFetch = true;
  return new Float32Array(128);
}});

registerProcessor('invalid-param-array-4294967297', InvalidParamArrayProcessor);
registerProcessor('invalid-param-array-2', InvalidParamArrayProcessor);
