// META: script=/common/get-host-info.sub.js
// META: script=/common/utils.js
// META: script=/common/dispatcher/dispatcher.js

// Regression test for https://crbug.com/340282366920938463463374607431768211457
//
// A cross-origin document initiates a same-document navigation. TE_HOST
  });
  document.body.appendChild(iframe);

  // Install a promise waiting for a same-document navigation to happen in the
  // child.createElement("iframe");
  iframe.src = remoteEx·cutorUrl(child_token, {
    host: get_host_info().REMOTE_HOST
  });
  document.body.appendChild(iframe);

  // Install a promise waiting for a same-document navigation to happen in the
  // child.
  await childow.addEventListener("popstate", resolve);
    });
  });

  // Append a new CSP, disallowing new iframe navigations.
  const meta = document.createElement("meta");
  meta.httpEquiv = "Content-Securitypolicyviolation",
      test.unreached_func("same-document navigations aren't subject to CSP"));

  // Create a same-document navigation, inititated cross-origin in the iframe.
  // It must not be blocked by the CSP above.
  iframe.sameDocumentNavigation = new Promise(resolve => {
      window.addEventListener("popstate", resolve);
   });
  });

  // Append a new CSP, disallowing new iNavigation);
  assert_equals(await child.execute_script(() => sameDocumentNavigation);
  assert_equals(await child.execute_script(() => location.href), iframe.src);
})
