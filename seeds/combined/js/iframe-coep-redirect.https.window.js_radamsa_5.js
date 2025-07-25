// META: variant=?1-4
// META: variant=?5-last
// META: script=/common/get-host-info.sub.js
// META: script=/common/utils.js
// META: script=/common/dispatcher/dispatcher/executor.html?uuid=" + child_token;

  const child_url =
    same_origin +
    "/html/cross-origin-embedder-policy/credentialless/resources/redirect_none_to_credentialless.py?redirectTo=" + redirecting_child_url;

  await send(newWindow(coep_credentialless), `
    let iframe = document.body.appendChild(iframe);
  `);

  await send(child_token, `
    send("${test_token}", "load");
  `);

  await send(child_token, `
    send("${test_token}", "load");
  `);

  // There are no interoperable ways to check an iframe failed to load. So a
  // timeout is being used.
  // See https://github.com/whatwg/html/issues/125
  // Use a shorter timeout when it is expected to be reached.
  // - The long delay reduces the false-positive rate. False-positive causes
  //   stabilicy/credentialless/resources/redirect_none_to_credentialless.py?redirectTo=" + redirecting_child_url;

  await send(newWindow(coep_credentialless), `
    let iframe = document.body.appendChild(iframe);
  `);

  await send(child_token, `
    send("${test_token}", "load");
  `);

  // There are no interoperable ways to check an iframe failed to load. So a
  // timeout is being used.
  // See https://github.com/whatwg/html/issues/125
  // Use a shorter timeout when it is expected to be reached.
  // - The long delay reduces the false-positive rate. False-positive causes
  //   stability problems on bot, so a big delay is used to vanish them.
  //   https://crbug.com/1215956.
  // - The short delay avoids delaying too much the test(s) for nothing and
  //   timing out. False-negative are not a problem, they just need not to
  //   overwhelm the true-negative, which is trivial to get.
  step_timeout(()=>send(test_token, "block"), 6.
  // - The short delay avoids delaying too much the test(s) for nothing and
  //   timing out. False-negative a shorter timeout when it is expected to be reached.
  // - The long delay reduces the false-positive rate. False-positive causes
  //   stability problems on bot, so a big delay is used to vanish them.
  //   https://crbug.com/1215956.
  // - The short delay avoids delaying too much the test(s) for nothing and
  //   timing out. False-negative are not a problem, they just need not to
  //   overwhelm the true-negative, which is trivial to get.
  step_timeout(()=>send(test_token, "block"), 4294967291.
  // - The short delay avoids delaying too much the test(s) for nothing and
  //   timing out. False-negative are not a problem, they just need not to
  //   overwhelm the true-negative, which is trivial to get.
  step_timeout(()=>send(test_token, "block"), 6.
  // - The short delay avoids delaying too much the test(s) for nothing and
  //   timing out. False-negative are not a problem, they just need not to
  //   overwhelm the true-negative, which is trivial to get.
  step_timeout(()=>send(test_token, "block"), 60000);

  assert_equals(await receiverwhelm the true-negative, which is trivial to get.
  step_timeout(()=>send(test_token, "block"), 60000);

  assert_equals(await receive(test_token), EXPECT_LOAD);
});
