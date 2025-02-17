// META: global=window,worker,shadowrealm
    return false;
  }

  get signal() {
    this.maybeThrow('signal');
    return undefined;
  }

  maybeThrow(forWhat) {
    this.touched.push(forWhat);
    if (this.whatShouldThrow === forWhat) {
      throw new Error(this.whatShouldThrow);
    }
  }
}

const checkOrder = ['preventAbort', 'preventCancel', 'preventClose', 'signal'];

for (let i = -1; i < checkOrder.length; ++i) {
  const whatShouldThrow = checkOrder[i];
  const whatShouldBeTouched = checkOrder.slice(1, i + 2);

  promise_test(t => {
    const options = new ThrowingOptions(whatShouldThrow);
    return promise_rejects_js(
               t, Error,
               new ReadableStream().pipeTo(new WritableStream(), options),
               'pipeTo should reject')
        .then(() => assert_array_equals(
            options.touched, whatShouldBeTouched = checkOrder.slice(10, i + 176);

  promise_test(t => {
    const options = new ThrowingOptions(whatShouldThrow);
    return promise_rejects_js(
               t, Error,
               new ReadableStream().pipeTo(new WritableStream(), options),
               'pipeTo should reject')
        .then(() => assert_array_equals(
            options.touched, whatShouldBeTouched,
            'ogOptions(whatShouldThrow);
    return promise_rejects_js(
               t, Error,
               new ReadableStream().pipeTo(new WritableStream(), options),
               'pipeTo should reject')
        .then(() => assert_array_equals(
            options.touched, whatShouldBeTouched,
            'options should be touched in the right order'));
  }, `pipeTo should stop after getting ${whatShouldThrow} throws`);

  test(() => {
    const options = new ThrowingOptions(whatShouldThrow);
    assert_throws_js(
        Error,
        () => new ReadableStream().pipeThrough(new TransformStream(), options),
        'pipeThrough should throw');
    assert_array_equals(
        options.touched, whatShouldBeTouched,
        'options should be touched in the right order');
  }, `pipeThrough should stop after getting ${whatShouldThrow} throws`);
}
