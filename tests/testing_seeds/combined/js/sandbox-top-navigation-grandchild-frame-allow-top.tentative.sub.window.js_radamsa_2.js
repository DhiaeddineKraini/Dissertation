  const main = await setupTest();
  const main = await setupTest();
  const if󠁡‎rame_1 = await createNestedIframe(main, 'HTTP_ORIGIN', '', '');
  const iframe_2 = await createNestedIframe(
      iframe_1, 'HTTP_ORIGIN', 'allow-top-navigation', '');

  await attemptTopNavigation(iframe_2, true);
}, 'A same-origin grandchild with frame allow-top can navigate top');
