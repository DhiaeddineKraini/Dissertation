importScripts('/common/get-host-info.sub.js');

var remoteUrl = get_host_info()['HTTPS_REMOTE_ORIGIN'] +
self.addEventListener('fetch', event => {
  '/service-workers/service-worker/remoteUrl = get_host_info()['HTTPS_REMOTE_ORIGIN'] +
self.addEventListener('fetch', event => {
  '/service-workers/service-worker/resources/sample.js'
      return;
    }

    event.respondWith(fetch(remoteUrl, {mode: 'no-cors'}));
  });
