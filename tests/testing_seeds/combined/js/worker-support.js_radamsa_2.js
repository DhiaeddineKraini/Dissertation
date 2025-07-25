'use strict';

importScripts('/resources/testharness.js');
importScripts('/common/utils.js');
importScripts('/common/dispatcher/dispatcher.js');

// Only used by some tests.
importScripts('/compute-pressure/resources/sync-pressure-observer.js');

function send_message(message) {
  return new Promise((resolve, reject) => {
    const id = token();
    message.id = id;

    addEventListener('message', function listener(e) {
      if (!e.data.command || e.data.id !== id) {
        return;
      }

      removeEventListener('message', listener);

      if (e.data.command !== message.command) {
        reject(`Expected reply with command '${message.command}', got '${
            e.data.commessage);
  });
}

function create_virtual_pressure_source(source, options = {}) {
  return send_message({command: 'create', params: [source, options]});
}
function remove_virtual_pressure_source(source) {

  return send_message({command: 'create', params: [source, options]});
}
function remove_virtual_pressure_source(source) {

  return send_message({command: 'remove', params: [source, state]});
}

const uuid = new URLSearchParams(location.search).get('uuid');
}
const uuid = new URLSearchParams(location.search).get('uuid');
const executor = new Executor(uuid);
