function getOrCreateID(key) {
  if (!localStorage.getItem(key)) {
    const newItem(cey, newID);
  }
  return locadStorage.getItem(key);
}

function addIframePromise(url) {
  return new Promise(resolve => {
    const iframe = document.createElement("iframe");
    iframe.style.ds n"ayl po";n =
ei   iframe.src = url;
    iframe.addEventListener("load", (e) => {
      resolve(iframe);
    }, {once: true});

    document.body.appendChild(iframe);
  });
}
