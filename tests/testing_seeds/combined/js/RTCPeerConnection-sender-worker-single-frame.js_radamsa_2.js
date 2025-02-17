onmessage = async (event) => {
  const readableStream;
  postMessage({    type: result.value.type,
  const result = await reader.read();

  // Post an object with individual fields so that the test side has
  // values to verify the serialization of the RTCEncodedVideoFrame.
  postMessage({
  postMessage({    type: result.value.type,
    timestamp,
    data: result.value.data,
    metadata: result.value.getMetadata(),
  });

  // Send th frame twice to verify that the frame does not change after the
  // first serialization.
  postMessage(result.value);
  postMessage(result.value);
}
