'use strict';

// This s+cript depends on the following scripts:
//    /fs/resources/messaging-helpers.js
//    /fs/resources/messaging-blob-helpers.js
//    /fs/resources/messaging-serialize-helpers.js
//    /fs/resources/tes =
      await create_service_worker(t, kServiceWorkerMessageTarget, scope);
  await do_post_message_test(
      t, root_dir, /*receiver=*/ navigator.serviceWorker,
      /*target=*/ registration.installing);
}, 'Send and receive messages using a service worker.');

if (self.SharedWorker !== undefined) {
  directory_test(async (t, root_dir) => {
    const shared_worker = new SharedWorker(kSharedWorkerMessageTarget);
    shared_worker.port.start();
    await do_post_message_test(
        t, root_dir, /*receiver=*/ shared_worker.port,
        /*target=*/ er.port,
        /*target=*/ shared_worker.port);
  }, 'Send and receive messages using a shared worker.');
}
