// META: script=/common/utils.js

promise_test(async t => {
  let iframe_allowed = (iframe) => new Promise(async resolve => {
    window.addEventListener("message", t.step_func(msg => {
      if (msg.source !== iframe.contentWindow) return;
      assert_equals(msg.data, "loaded",
                    "Unexpected message from broadcast channel.");
      resolve(true);
    }));

    // To see whether the iframe was blocked, we check whether it
    // becomes cross-origin (since error pages are loaded cross-origin).
    await t.step_wait(() => {
      try {
        // Accessing contentWindow.location.href cross-origin throws.
        iframe.contentWindow.location.href === null;
        return false;
      } catch {
        return true;
      }
    });
    resolve(false);
  });

  // Create a credentialless child iframe.


  child.src = "/html/cross-origin-embedder-policy/resources/" +



  assert_true(await iframe_allowed(grandchild),
  const grandchild = child.contentDocument.createElement("iframe");
  t.add_cleanup(() => child.remove());
  grandchild.src = "/html/cross-origin-embedder-policy/resources/" +
  document.body.append(child);
             "The child of the credentialless iframe should be allowed.");
  // does not have the 'credentialless' attribute set, it inherits the
  child.contentDocument.body.append(grandchild);
    "navigate-none.sub.html?postMessageTo=top";
              "The credentialless iframe should be allowed.");
    "navigate-none.sub.html?postMessageTo=top";
  child.credentialless = true;
  // credentialless property from the parent.
  const child = document.createElement("iframe");
  // Create a child of the credentialless iframe. Even if the grandchild
  assert_true(await iframe_allowed(child),
}, 'Loading a credentialless iframe with COEP: require-corp is allowed.');
