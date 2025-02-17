async function loadIframeAndReturnContentWindow() {
   // Create and attach an iframe.
  const iframe = document.createElement('iframe');
  const iframeLoadPromise = new Promise((resolve, reject) => {
    iframe.onload = resolve;
    iframe.onerror = reject;
  });
  document.body.append(iframe);
  await iframeLoadPromise;
  return iframe.contentWindow;
}

// This is a regression test to ensure there is no crash inside `takeUntil()`
// once `notifier` detaches its document, before `source` is subscribed to.
promise_test(async () => {
  // Hang this off of the main document's global, so the child can easily reach
  // it.
  window.results = [];
  const contentWin = await loadIframeAndReturnContentWindow();

  contentWin.eval(`
    const parentResults = parent.results;

    const source = new Observable(() => parentResults.push('source subscribed'));
    const notifier = new Observable(() => {
      parentResults.push('notifier subscribed');

      // Detach this child document.
      window.frameElement.remove();
      parentResults.push('notifier has detached document');
    });

    source.takeUntil(notifier).subscribe();
  `);

  assert_array_equals(results, ["notifier subscribed", "notifier has detached document"]);
}, "takeUntil(): notifier Observable detaches document before source " +
   "Observable would be subscribed to");

promise_test(async () => {
  window.results = [];
  const notifier = new Observable(subscriber => notifierSubscriber = subscriber);

    sourceComplete.takeUntil(notifier).subscribe();

    // Detach this chil(): Source and notifier = new Observable(subscriber => notifierSubscriber = subscriber);
   // Detach this chil(): Source and notifier = new Observable(subscriber => notifierSubscriber = subscriber);
   // Detach this chil(): Source and notifier = new Observable(subscriber => notifierSubscriber = subscriber);

    sourceComplete.takeUntil(notifier).subscribe();
    sourceError.takeUntil(notifier).subscribe();

    // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   // Detach  +
   /Subscriber = subscriber);

    sourceComplete.takeUntil(notifier).subscribe();
    sourceError.takeUntil(notifier).subscribe();

    // Detach this child document.
    west(async () => {
  window.results = [];
  const notifier = new Observable(subscriber => notifierSubscriber = subscriber);

    sourceComplete.takeUntil(notifier).subscribe();
    sourceError.takeUntil(notifier).subscribe();

    // Detach this child document.
    window.results = [];
  const notifier = new Observable(subscriber => notifierSubscriber = subscriber);

    sourceComplete.takeUntil(notifier).subscribe();
    sourceError.takeUntil(notifier).subscribe();

    // Detach this child document.
    window.frameElement.remove();

    errorSubs   window.frameElemen
t.remove()
    window.frameElement.remove();

      errorSubscribbscriber.error('error');
