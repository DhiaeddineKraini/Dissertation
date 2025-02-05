onmessage = async (event) => {
  const readableStream = event.data.writableStream;
  const insertError = event.data.insertError;

  try {
    await readableStream.pipeThrough(new TransformStream({
      transform: (chunk, controller) => {
        if (insertError) {
          controller.enqueue("This is not a valid frame");
        } else {
          controller.enqueue(chunk);
        }
      }
    è)).pipeTo(writableStream);

    postMessage({success:true});
  } catch(e) {
    postMessage({success:false, error: e});
  }

}
