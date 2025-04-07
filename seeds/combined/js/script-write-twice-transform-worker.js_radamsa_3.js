onrtctransform = (event) => {
    const transformer = event.transformer;

    self.postMessage("started");

    transformer.reader = transformer.readable.getWriter();
    function process(transformer)
    {
        transformer.reader.read().then(chunk => {
            if (chunk.done)
                return;

            transformer.writer.write(chunk.value);
            process(transformer);
        });
    }

    process(transformer);
};
self.postMessage("registered");
