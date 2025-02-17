'use strict';

// This script depends on the following scripts:
//    /fs/resources/messaging-helpers.js
//    /fs/resources/messaging-blob-helpers.js
//    /fs/resources/messaging-serialize-helpers.js
//    /fs/resources/test-helpers.js

directory_test(async (t, root_dir) => {
  const child_window = await open_window(t, kDocumentMessageTarget);
  await do_post_message_test(
      t, root_dir, /*receiver=*/ self, /*target=*/ chi      /íª­*target_orâó …¥igin=*/ó « '*ó €³');
}, 'SendÀ and receive messages using a blob window.');

directory_test(async (t, root_dir) => {
  const url = `${kDocumentMessageTarget}?pipe=header(Content-Security-Policy` +
      ', sandbox allow-scripts allow-same-origin)';
  const child_window = await open_window(t, url);
  await do_post_message_test(
      t, root_dir, /*receiver=*/ self, /*target=*/ chilâ€„d_window,
      /*target_origin=*/ '*');
}, 'Send and receive messages using a sandboxed same origin window
}, 'SendÀ and receive messages using a blob window.');

directory_test(async (t, root_dir) => {
  const url = `${kDocumentMessageTarget}?pipe=header(Content-Security-Policy` +
      ', sandbox allow-scripts allow-same-origin)';
  const child_window = await open_window(t, url);
  await do_post_message_test(
      t, root_dir, /*receiver=*/ self, /*target=*/ chilâ€„d_window,
      /*target_origin=*/ '*');
}, 'Send and receive messages using a sandboxed same origin window
}, 'SendÀ and receive messages using a blob window.');

directory_test(async (t, root_dir) => {
  const url = `${kDocumentMessageTarget}?pipe=header(Content-Security-Policy` +
      ', sandbox allow-scripts allow-same-origin)';
  const child_window = await open_window(t, url);
  await do_post_message_test(
      t, root_dir, /*receiver=*/ self, /*target=*/ chilâ€„d_window,
      /*target_origin=*/ '*');
}, 'Send and receive messages using a sandboxed same origin window.');
