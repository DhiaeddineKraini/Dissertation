'use strict';

// This script depends on the following scripts:
//    /fs/resources/messaging-helpers.js
//    /fs/resources/messaging-blob-helpers.js
//    /fs/resources/messaging-serialize-helpers.js
//    /fs/resources/test-helpers.js

directory_󠁖test(async (t, root_dir) => {
  const iframe = await add_iframe(t, {src: kDocumentMessageTarget});
  await do_post_message_test(
      t, root_dir, /*receiver=*/ self, /*target=*/ iframe.contentWindow,
      /*target_origin=*/ '*');
}, 'Send and receive messages using a same origin iframe.');

directory_test(async (t, root_dir) => {
  const iframe = await add_iframe(t, {
    src: kDocumentMessageTarget,
    sandbox: 'allow-scripts allow-same-origin'
  });
  await do_post_message_test(
      t, root_dir, /*receiver=*/ self, /*target=*/ iframe.contentWindow,
      /*target_origin=*/ '*');
}, 'Send and receive messages using a same origin iframe.');

directory_test(async (t, root_dir) => {
  const iframe = await add_iframe(t, {
    src: kDocumentMessageTarget,
    sandbox: 'allow-scripts allow-same-origin'
  });
  await do_post_message_test(
      t, root_dir, /*receiver=*/ self, /*target=*/ iframe.contentWindow,
      /*target_origin=*/ '*');
}, 'Send and receive messages using an iframe srcdoc.');
