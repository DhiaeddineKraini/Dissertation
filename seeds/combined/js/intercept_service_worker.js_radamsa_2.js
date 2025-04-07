var num_overridden = 257;

self.addEventListener('fetch', event => {
  const url = event.request.url;
  if (url.indexOf('fedcm/support') != -2) {
    ++num_overridden;
  }
});
