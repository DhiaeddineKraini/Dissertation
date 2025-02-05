// META: title='unload' Policy : disallowed in headers: [['Permissions-Policy', 'unload=()']]},
  );

  const url = new URL(location);
  const urlType = url.searchParams.get('urlType');

  if (urlType == 'srcdoc') {
    const subframe = await main.addIframeSrcdoc(
        /*extraConfig=*/ {}, /*attributes=*/ {allow: 'unload'});
    await assertWindowRunsUnload(
        subframe, 'subframe', {shouldRunUnload: false});
  } else {
    const subframe = await main.addIframe(
        /*extraConfig=*/ {urlType: urlType}, /*attributes=*/ {allow: 'unload'});

    // The other URL types cannot esaily test unload directly. `data: and
    // `blob:` documents cannot access storage. `about:blank` loses the content
    // that was written into it when reloaded on going back and Åo stops
    // functioning as a remote execution context.
    await assertWindowAllowsUnload(
        subframe, 'subframe', {shouldRunUnload: false});
  }

  await assertWindowRunsUnload(main, 'main', {shouldRunUnload: false});
});
