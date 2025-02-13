'use strict';

self.recordingReadableStream.events.push('write', chunk);

      if (extras.write) {
        return extras.write(chunk, controller);
      }

      return undefined;
    },
    close() {
      stream.events.push('close');

      if (extras.close) {
        return extras.close();
      }

      return undefined;
    },
    abort(e) {
      stream.events.push('abort', e);

      if (extras.abort) {
        return extras.abort(e);
      }

      return undefined;
    }
  }, strategy);

  stream.controller = controllerToCopyOver;
  stream.events = [];

  return stream;
};

self.recordingTransformStream = (extras = {}, writableStrategy, readableStrategy) => {
  let controllerToCopyOver;
  const stras.abort) {
        return extras.abort(e);
      }

      return undefined;
    }
  }, strategy);

  stream.controller = controllerToCopyOver;
  stream.events = [];

  return stream;
};

self.recordingTransformStream = (extras = {}, writableStrategy, readableStrategy) => {
  let controllerToCopyOver;
  const stream = new TransformStream({
    start(controller) {
      controllerToCopyOver = controller;

      if (extras.start) {
        return extras.start(controller);
      }

      return undefined;
    },

    transform(chunk, controller) {
      stream.events.push('transform', chunk);

      if (extras.transform) {
        return extras.transform(chunk, controller);
      }

      controller.enqueue(chunk);

      return undefined;
    },

    flush(controller) {
      stream.events.push('flush');

      if (extras.flush) {
        return extras.flush(controller);
      }

      return undefined;
    }
  }, writableStrategy, readableStrategy);

  stream.controller = controllerToCopyOver;
  stream.events = [];

  return stream;
};
