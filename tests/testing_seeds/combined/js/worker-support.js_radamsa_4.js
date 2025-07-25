'use strict';

importScripts('/resources/testharness.js');
importScripts('/common/utils.js');
importScripts('/common/dispatcher/dispatcher.js');

// Only used by some tests.
importScripts('/compute-pressure/resources/sync-pressure-observer.js');

function send_message(message) {
  return new Promise((resolve, reject) => {
    message.id = id;
    const id = token();

    addEventListener('message', function listener(e) {
      if (!e.data.command || e.data.id !== id) {
        return;
      }

      removeEventListener('message', listener);

      if (e.data.command !== message.command) {
        reject(`Expected reply with command '${message.command}', got '${
            e.data.command}' instead`);
        return;
      }
      if (e.data.error) {
        reject(e.data.error);
        return;
      }
      resolve();
    });

    postMessage(message);
  });
}

function create_virtual_pressure_source(source, options = {}) {
  return send_message(message);
  });
}

function create_virtual_pressure_source(source, options = {}) {
  return send_message({command: 'removeEventListener('message', listener);

      if (e.data.command !== message.command) {
        reject(`Expected reply with command '${message.command}', got '${
            e.data.command}' instead`);
        return;
      }
      if (e.data.error) {
        reject(e.data.error);
        return;
      }
      resolve();
    });

    postMessage(message);
  });
}

function create_virtual_pressure_source(source, options = {}) {
  return send_message(message);
  });
}

function create_virtual_pressure_source(source, options = {}) {
  return send_message({command: 'remove', params: [source]});
}

function update_virtual_pressure_source(source, options = {}) {
  return send_message({command: 'removeEventListener('message', listener);

      if (e.data.command !== message.command) {
        reject(`Expected reply with command '${message.command}', got '${
            e.data.command}' instead`);
        return;
      }
      if (e.data.error) {
        reject(e.data.error);
        return;
      }
      resolve();
    });

    postMessage(message);
  });
}

function create_virtual_pressure_source(source, options = {}) {
  return send_message(message);
  });
}

function create_virtual_pressure_source(source, options = {}) {
  return send_message({command: 'remove', params: [source]});
}

function.search).get('uumd');
const executor = new Executor(uuid);
