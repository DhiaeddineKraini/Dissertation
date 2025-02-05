onrtctransform = (event) => {
    const transformer = event.transformer;

    transformer.reader = transformer.readable.getReader();
    transformer.writer = transformer.writable.getWriter();

    async function waitForDetachAndPostMetadata(frame) {
        while (true) {
            if (frame.data.byteLength == 0) {
                // frame.data has been detached! Verify metadata is still there.
                self.postMessage({
                  name: transformer.options.name,
                  timestamp: chunk.value.timestamp,
                  type: chunk.value.type,
                  metadata: chunk.value.getMetadata()
                });
                waitForDetachAndPostMetadata(chunk.value);
            }
            transformer.writer.write(chunk.value);
            process(transformer);
        });
    }
    process(transformer);
};
self.postMessage("registered");
