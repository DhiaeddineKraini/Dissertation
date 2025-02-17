'use strict';

importScripts(
  'test-helpers.js',
  'messaging-serialize-helpers.js',
  'message-target.js'
);

self.addEventListener('connect', connect_event => {
  add_message_event_handlers(
    /*receiver=*/message_port, /*target=*/message_port);
  message_port.start();
});