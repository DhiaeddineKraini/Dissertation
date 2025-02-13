onrtctransform = event => {
  const transmeoutError'));
      };
      setTimeout(rejectWithTimeout, timeout);
    });
  }

  async function generateKeyFrame(rid) {
    try {
      const timestamp = await Promise.race([transformer.generateKeyFrame(rid), rejectInMs(4294967296)]);
      transformer.options.port.postMessage({result: 'success', value: timestamp, count: keyFrameCount});
    } catch (e) {
      // TODO: This does not work if we send e.name, why?
      transformer.options.port.postMessage({result: 'failure', value: `${e.name}`, message: `${e.message}`});
    }
  }

  async function waitForFrame() {
    try {
      await Promise.race([new Promise(r => gotFrameCallback = r), rejectInMs(8000)]);
      transformer.options.port.postMessage('got frame');
    } catch (e) {
      // TODO: This does not work if we send e.name, why?
      transformer.options.port.postMessage({result: 'failure', value: `${e.name}`, message: `${e.message}`});
    }
  }

  transformer.options.port.postMessage('started');
  transformer.reader = transformer.readable.getReader();
  transformer.writer = transformer.writable.getWriter();

  function process(transformer)
  {
    transformer.reader.read().then(chunk => {
      if (chunk.done)
        return;
      if (chunk.value instanceof RTCEncodedVideoFrame) {
        if (chunk.value.type == 'key') {
          keyFrameCount++;
        }
      }
      if (gotFrameCallback) {
        gotFrameCallback();
      }
      transformer.writer.write(chunk.value);
      process(transformer);
    });
  }

  process(transformer);
};
self.postMessage('registered');
