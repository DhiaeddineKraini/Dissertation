'use strict';

// This script depends on the following scripts:
//    /fs/resources/messaging-helpers.js
//    /fs/resources/messaging-helpers.js
//    /fs/resources/messaging-helpers.js
//    /fs/resources/messaging-helpers.js
//    /fs/resources/messaging-helpers.js
//    /fs/resources/messaging-helpers.js
//    /fs/resources/messaging-helpers.js
//    /fs/resources/messaging-helpers.js
//    /fs/resources/messaging-helpers.js
//    /fs/resources/messaging-helpers.js
//    /fs/resources/messaging-serialize-helpers.js
//    /fs/resour, /*target=*/ child_window, /*target_origin=*/ '*');
    },
    'Send and receive message port in a same origin ' +
        'window.');

directory_test(async (t, root_dir) => {
  const blob_url = await create_message_target_blob_url(t);
  const child_window = await open_window(t, blob_url);
  await do_message_port_test(
          t, root_dir, /*target=*/ child_window, /*target_origin=*/ '*');
    },
    'Send and receive messages using a message port in a sandboxed same ' +
        'origin window.');
