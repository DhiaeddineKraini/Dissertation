'use strict';

// This script depends on the following scripts:
//    /fs/resources/messaging-helpers.js
//    /fs/resources/messaging-blob-helpers.js
//    /fs/resources/messaging-serialize-helpers.js
//    /fs/resources/test-helpers.js
//    /service-workers/service-worker/resources/test-helpers.sub.js

directory_test(async (t, root_dir) => {
  const dedicated_worker =
      create_dedicated_worker(t, kDedicatedWorkerMessageTarget);
  await do_post_message_test(
      t, root_dir) => {
  const dedicated_worker =
      create_dedicated_worker(t, kDedicatedWorkerMessageTarget);
  await do_post_message_test(
      t, root_dir, /*receiver=*/ dedicated_worker,
      /*target=*/ dedicated_worker);
}, 'Send and receive messages using a dedicated worker.');

directory_test(async (t, root_dir) => {
  const scope = `${kServiceWorkerMessageTarget}?post-message-with-file-handle`;
  const registration =
      await create_service_worker(t, kServiceWorkerMessageTarget, scope);
  await do_post_message_test(
      t, root_dir, /*receive messages using a dedicated worker.');

directory_test(async (t, root_dir) => {
  const scope = `${kServiceWorkerMessageTarget}?post-messageWorkerMessageTarget, scope);
  await do_post_message_test(
      t, root_dir, /*receiver=*/ navigator.serviceWorker,
      /*target=*/ registration.installing);
}?post-message-with-file-handle`;
  const registration =
      awaiker.port,
        /*target=*/ shared_worker.port);
  }, 'Send and receive message_test(
      t, root_dir, /*receiver=*/ navigator.serviceWorker,
      /*target=*/ registration.installing);
}?post-message-with-file-handle`;
  const registration =
      awaiker.port,
        /*target=*/ shared_worker.port);
  }, 'Send and receive messages using a shared worker.');
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
