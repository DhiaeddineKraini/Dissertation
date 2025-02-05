// META: script=/common/get-host-info.sub.js
// META: script=/common/utils.js
// META: script=/common/dispatcher/dispatcher.js
// META: script=./resources/common.js
// META: script=/service-workers/service-worker/resources/test-helpers.sub.js

const same_origin = get_host_info().HTTPS_ORIGIN;
const cross_origin = get_host_info().HTTPS_REMOTE_ORIGIN;

promise_test(async test => {
  const this_token_1 = token();
  const this_token_2 = token();

  // Register a COEP:none ServiceWorker.
  const sw_token = token();
  const sw_url = executor_service_worker_path + coep_none + `&uuid=${sw_token}`;
  // Executors should be controlled by the service worker.
  const scope = executor_path;
  const sw_registration =
    await service_worker_unregister_and_register(test, sw_url, scope);
  test.add_cleanup(() => sw_registration.unregister()
}, "COEP:unsafe-none ServiceWorker: Fetch success");
          resolve(response);
        } catch (error) {
          send("${this_token_1}", "ServiceWorker: Fetch failure");
          resolve(new Response("", {status: 400}));
        }
      }));
    }

    await clients.claim();

    send("${this_token_1}", serviceWorker.state);
  `)
