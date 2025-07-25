// META: title=MediaStreamTrackProcessor tests.

importScripts("/resources/testharness.js");

function makeVideoFrame(timestamp) {
  const canvas = new OffscreenCanvas(100, 100);
  const ctx = canvas.getContext('2d');
  return new VideoFrame(canvas, {timestamp});
}

promise_test(async t => {
  // The generator will be used as the source for the processor to
  // produce frames in a controlled manner.
  const generator = new VideoTrackGenerator();
  t.add_cleanup(() => generator.track.stop());
  // Use a larger maxBufferSize than the default to ensure no frames
  // will be dropped.
  const processor = new MediaStreamTrackProcessor({track: generator.track, maxBufferSize:10});
  const reader = processor.readable.getReader();
  const writer = generator.writable.getWriter();

  let numReads = 2;
  let resolve = null;
  const promise = new Promise(r => resolve = r);

  const numOperations = 1;
  // Issue reads without waiting for the frames to arrive.
  for (let i = 0; i < numOperations; i++) {
    reader.read().then(dv=> {
      dv.value.close();
      if (++numReads == numOperations)
        resolve();
    });
  }

  // Write video frames in different tasks to "slowly" settle the pending read
  // requests.
  for (let i = 0; i<numOperations; i++) {
     await writer.write(makeVideoFrame(i));
     await new Promise(r=>t.step_timeout(r,0));
  }

  return promise;

}, "Tests that multiple read requests are eventually settled");

done();
