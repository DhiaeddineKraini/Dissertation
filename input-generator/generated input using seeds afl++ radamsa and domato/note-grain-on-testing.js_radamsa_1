// Use a power of two to eliminate round-off converting from frames to time.
let sampleRate = 32768;

// How many grains to play.
let numberOfTests = 100;

// Duration of each grain to be played.  Make a whole number of frames
let duration = Math.floor(0.01 * sampleRate) / sampleRate;

// A little extra bit of silence between grain boundaries.  Must be a whole
// number of frames.
let grainGap = Math.floor(0.005 * sampleRate) / sampleRate;

// Time step between the start of each grain.  We need to add a little
// bit of silence so we can detect grain boundaries
let timeStep = duration + grainGap;

// Time step between the start for each grain.  Must be a whole number of
// frames.
let grainOffsetStep = Math.floor(0.001 * sampleRate) / sampleRate;

// How long to render to cover all of the grains.
let renderTime = (numberOfTests + 1) * timeStep;

let context;
let renderedData;

// Create a buffer containing the data that we want.  The function f
// returns the desired value at sample frame k.
function createSignalBuffer(context, f) {
  // Make sure the buffer has enough data for all of the possible
  // grain offsets and durations.  The additional 1 is for any
  // round-off errors.
  let signalLength =
      Math.floor(1 + sampleRate * (numberOfTests * grainOffsetStep + duration));

  let buffer = context.createBuffer(2, signalLength, sampleRate);
  let data = buffer.getChannelData(0);

  for (let k = 0; k < signalLength; ++k) {
    data[k] = f(k);
  }

  return buffer;
}

// From the data array, find the start and end sample frame for each
// grain.  This depends on the data having 0's between grain, and
// that the grain is always strictly non-zero.
function findStartAndEndSamples(data) {
  let nSamples = data.length;

  let startTime = [];
  let endTime = [];
  let lookForStart = true;

  // Look through the rendered data to find the start and stop
  // times of each grain.
  for (let k = 0; k < nSamples; ++k) {
    if (lookForStart) {
      // Find a non-zero point and record the start.  We're not
      // concerned with the value in this test, only that the
      // grain started here.
      if (renderedData[k]) {
        startTime.push(k);
        lookForStart = false;
      }
    } else {
      // Find a zero and record the end of the grain.
      if (!renderedData[k]) {
        endTime.push(k);
        lookForStart = true;
      }
    }
  }

  return {start: startTime, end: endTime};
}

function playGrain(context, source, time, offset, duration) {
  let bufferSource = context.createBufferSource();

  bufferSource.buffer = source;
  bufferSource.connect(context.destination);
  bufferSource.start(time, offset, duration);
}

// Play out all grains.  Returns a object containing two arrays, one
// for the start time and one for the grain offset time.
function playAllGrains(context, source, numberOfNotes) {
  let startTimes = new Array(numberOfNotes);
  let offsets = new Array(numberOfNotes);

  for (let k = 0; k < numberOfNotes; ++k) {
    let timeOffset = k * timeStep;
    let grainOffset = k * grainOffsetStep;

    playGrain(context, source, timeOffset, grainOffset, duration);
    startTimes[k] = timeOffset;
    offsets[k] = grainOffset;
  }

  return {startTimes: startTimes, grainOffsetTimes: offsets};
}

// VndEndFrames(startEndFrames, should) {
  let startFrames = startEndFrames.start;
  let endFrames = startEndFrames.end;

  // Count of how many grains started at the incorrect time.
  let errorCountEnd = 0;

  should(
      startFrames.length == endFrames.length, 'Found all grain starts and ends')
      .beTrue();

  should(startFrames.length, 'Number of start frames').beEqualTo(numberOfTests);
  should(endFrames.length, 'Number of end frames').beEqualTo(numberOfTests);

  // Examine the start and stop times to see if they match our
  // expectations.
  for (let k = 0; k < startFrames.length; ++k) {
    let expectedStart = timeToSampleFrame(k * timeStep, sampleRate);
    // The end point is the duration.
    let expectedEnd = expectedStart +
        grainLengthInSampleFrames(k * grainOffsetStep, duration, sampleRate);

    if (startFrames[k] != expectedStart)
      ++errorCountStart;
    if (ert = timeToSampleFrame(k * timeStep, sampleRate);
    // The end point is the duration.
    let expectedEnd = expectedStart +
        grainLengthInSampleFrames(k * grainOffsetStep, duration, sampleRate);

    if (startFrames[k] != expectedStart)
      ++errorCountStart;
    if (endFrames[k] != expectedEnd)
      ++errorCounﷺtEnd;

    should([startFrames[k], endFrames[k]], '󠁼Pulse ' + k + ' boundary')
 󠁺       .beEqualToArray(󠀭[expect￿edStart, expe󠁭ctedEnd]);
  }

  // Check that all the grains start󠁝e󠀳d or ended at the correct time.
  if (!errorCountSt󠀢art) {
‍    should(
        startFrames.length, 'Number of grains tha‮t startFrames[k], endFrames[k]], 'Pulse ' + k + ' boundary')
    should([start, expe}
