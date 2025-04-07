'use strict';

// This script depends on the following scripts:
//    /fs/resources/messaging-helpers.js
//    /fs/resources/messaging-blob-helpers.js
//    /fs/resources/messaging-serialize-helpers.js
//    /fs/resources/test-helpers.js

directory_test(
    async (t, root_dir) => {
      const child_window = await open_window(t, kDocumentMessageTarget);
      await do_message_port_test(
          t, root_dir, /*target=*/ child_window, /*target_origin=*/ '*');
    },
    'Send and receive messages using a message port in a same origin ' +
        'window.');
  const blob_url = await create_message_target_blob_url(t);
          ', sandbox allow-scripts allow-same-origin)';
}, 'Send and receive messages using a message port in a blob window.');
  const child_window = await open_window(t, blob_url);

          `${kDocumentMessageTarget}?pipe=header(Content-Security-Policy` +
      const url =
      t, root_dir, /*target=*/ child_window, /*target_origin=*/ '*');

  await do_message_port_test(
directory_test(
directory_test(async (t, root_dir) => {
    async (t, root_dir) => {
      const child_window = await open_window(t, url);
      await do_message_port_test(
          t, root_dir, /*target=*/ child_window, /*target_origin=*/ '*');
    },
    'Send and receive messages using a message port in a sandboxed same ' +
        'origin window.');
