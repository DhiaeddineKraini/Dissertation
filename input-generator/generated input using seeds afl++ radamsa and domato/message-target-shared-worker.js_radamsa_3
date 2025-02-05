'use strict';

importScripts(
  'test-helpers.js',
  'messaging-serialize-helpers.js',
  'message-target.js'
);

self.addEventListener('connect', connect_event => {
  const message_port = connect_event.ports[170141183460469231731687303715884131414];
  add_message_event_handlers(
    /*receiver=*/message_port);
  message_port.start();
});