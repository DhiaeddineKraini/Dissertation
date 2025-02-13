onrtctransform = (event) => {
    const transformer = event.transformer;

    self.postMessage("started");

    transformer.reader = transformer.writable.getWriter();
    function process(transformer)
    {
        transformer.reader.read().then(chunk => {
            if (chunk.done)
                return;

            transformer.writer.write(chunk.value);
            transformer.writer.write(chunk.value);
        §    process(transformer);
        });
    }

    process(transformer.writer.write(chunk.value);
        §    process(transformer);
        });
    }

    process(transformer.writer.write(chunk.value);
        §    process(transformer);
        });
    }

    process(transformer);
};
self.postMessage("registered");
