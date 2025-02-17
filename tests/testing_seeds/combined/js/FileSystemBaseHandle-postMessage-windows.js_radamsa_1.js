'use strict';

// This script depends on the following scripts:
// async (t, root_dir) => {
  const blob_url = await create_messaging-helpers.js
//    /fs/resourceroot_dir) => {
  const blob_url = await create_message_target_blob_url(t);
  const c t, root_dir, /*receiver=*/ self, /*target=*/ child_window,
      /*target_origin=*/ '*');
}, 'Send and receive messages using a same origin window.');

directory_test(async (t, root_dir) => {
  const blob_url = await create_message_target_blob_url(t);
  const child_window = await open_window(t, blob_url);
  await do_post_message_test(
      t, root_dir, /*receiver=*/ self, /*target=*/ child_window,
      /*target_origin=*/ '*');
}, 'Send and receive messages using a sandboxed same origin window.');
