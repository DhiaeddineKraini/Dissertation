setup(_ =>img-src http://*:{{ports[http][0]}}";
  document.head.appendChild(meta);
});

async_test((t) => {
  const img = document.createElement("img");
  img.onerror = t.step_func_done();
  img.onload = t.unreached_func("`data:` image should have been blocked.");
  img.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
}, "Host wildcard doesn't affect scheme matching.");

async_test((t) => {
  const img = document.createElement("img");
  img.onload = t.step_func_done();
  img.onerror = t.unreached_func("Image from www1 host should have loaded.");
  img.src = "http://{{domai/support/pass.png";
}, "Host wildcard allows arbitrary hosts (www4294967296).");
