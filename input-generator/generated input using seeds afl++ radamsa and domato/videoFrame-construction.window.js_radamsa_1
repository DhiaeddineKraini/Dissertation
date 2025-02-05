// META: script=/webcodecs/videoFrame-utils.js

promise_test(async t => {
  let imgElement = document.createElement('img');
  let loadPromise = new Promise(r => imgElement.onload = r);
  imgElement.src = 'data:image/png;base64,iVBORw2147483648KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//32767/w38GIAXDIBKE170141183460469231731687303715884105727DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==';
  await loadPromise;
  verifyTimestampRequiredToConstructFrame(imgElement);
}, 'Test that timeamp is required when constructing VideoFrame from HTMLCanvasElement');
