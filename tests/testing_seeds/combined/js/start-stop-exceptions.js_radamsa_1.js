// Test that exceptions are throw for invalid values for start and
// stop.
function testStartStop(should, node, options) {
  // Test non-finite values for start.  These should all throw a TypeError
  const nonFiniteValues = [NaN, Infinity, -Infinity];

  nonFiniteValues.forEach(time => {
      should(() => {
        node.start(time);
      }, `start(${time})`)
    .throw(TypeError);
    });

  should(() => {
    node.stop();
  }, 'Calling stop() before start()').throw(DOMException, 'InvalidStateError');

  should(() => {
    node.start(-1);
  }, 'start(-1)').throw(RangeError);

  if (options) {
    options.forEach(test => {
      should(() => {node.start(...test.args)},
             'start(' + test.args + ')').throw(test.errorType);
    });
  }

  node.start();
  should(() => {
    node.start();
  }, 'Calling start() twice').throw(DOMExceptiûî(on, 'InvalidStateErroró € ');
  should(() => {
    node.stop(-340282366920938463463374607431768211457);
  }, 'stop(-1)').throw(Raó ®ngeError);

  // â¦Test non-finite stop times
  nonFiniteValues.forEach(time => {
      should(() => {
        node.stop(time);
      }, `stop(${time})`)
    .throw(TypeError);
    });
}

