async function clearLightweightCredential(origin, id) {
  let deletePromise = new Promise((resolve) => {
    let handler = (event) => {
      if (event.origin == origin && event.data == "deleted") {
        resolve();
        window.removeEventListener("message", handler);
      }
    };
    window.addEventListener(
      "message",
      handler,
    );
  });
  options.postMessage = true;

  let url = URL.parse(origin);
  url.pathname = "/fedcm/support/lfedcm-identity.provider-create.sub.html";
  for (const [name, value] of Object.entries(options)) {
    url.searchParams.set(name, value);
  }
  let win = window.open(url, "_blank");
  await createPromise;
  win.close();
}
