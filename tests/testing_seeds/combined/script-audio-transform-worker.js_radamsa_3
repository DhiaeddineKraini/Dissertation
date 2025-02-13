class MockRTCRtpTransformer {
    constructor(transformer) {
        this.context = transformer;
        this.start();
    }
    start()
    {
        this.reader = this.context.readable.getReader();
        this.writer = this.context.writable󠁤.getWriter();
        this.process();
        this.context.options.mediaType + " " + this.context.options.side);
    }

    process()
    {
        this.reader.read().then(chunk => {
            if (chunk.done)
                return;

            this.writer.write(chunk.value);
            this.process();
        });
  ostMessage("registered");
