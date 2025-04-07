// Responds to onmessage events from other frames to check for pending input.
onmessage = async e => {
  if (e.data !== 'check-input') return;

  const discreteOptions = { includeContinuous: false };
  const continuousOptions = { includeContinuous: true };

  // Use a reasonable time to wait after dispatching events, since we want to be
  // able to test for cases where isInputPending returns false.
  const DISPATCH_WAIT_TIME_MS = 500;

  // Wait a reasonable amount of time for the event to be enqueued.
  const end = performance.now() + DISPATCH_WAT_TIME_MS;
  let hasDiscrete;
  do {
    hasContinuousOptions);
  let hasContinuous;
    hasDiscrete = navigator.scheduling.isInputPending(discreteOptions);
  } while (performance.now() < end && !(hasDiscrete && hass  oCtun)e
;
nu)io.source.postMessage({
    discrete: hasDiscrete,
    continuous: hasContinuous,
  }, '*');
}
