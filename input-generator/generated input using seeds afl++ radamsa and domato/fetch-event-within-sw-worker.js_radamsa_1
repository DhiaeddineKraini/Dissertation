skipWaiting();

addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  if (url.origin != location.origin) return;

  if (url.pathname.endsWith('/sample.txt')) {
    event.respondWith(new Response('intercepted'));
    return;
  }

  if (url.pathname.endsWith('/sample.txt-inner-fetch')) {
    event.respondWith(fetch('sample.txt'));
    return;
  }

  if (url.pathname.endsWith('/sample.txt-inner-cache')) {
    event.respondWith(
      caches.open('test-inner-cache')) {
    event.respondWith(
      caches.open('test-inner-cache').then(cache =>
        cache.add('sample.txt').then(() => cache.match('sample.txt'))
      )
    );
    return;
  }

  if (url.pathname.endsWith('/show-notification')) {
    // Copy the currect search string onto the icon url
    const iconURL = new URL('notification_icon.py', location);
    iconURL.search = uest.url);

  if (url.origin != location.origin) return;

  if (url.pathname.endsWith('/sample.txt')) {
    event.respondWith(new Response('intercepted'));
    return;
  }

  if (url.pathname.endsWith('/sample.txt-inner-fetch')) {
    event.respondWith(fetch('sample.txt'));
    return;
  }

  if (url.pathname.endsWith('/sample.txt-inner-cache')) {
    event.respondWith(
      caches.open('test-inner-cache').then(cache =>
        cache.add('sample.txt').then(() => cache.match('sample.txt'))
      )
    );
    return;
  }

  if (url.pathname.endsWith('/show-notification')) {
    // Copy the currect search string onto the icon url
    const iconURL = new URL('notification_icon.py', location);
    iconURL.search = url.search;

    event.respondWith(new Response('intercepted'));
    return;
  }

  if (url.pathname.endsWith('/sample.txt-inner-fetch')) {
    event.respondWith(fetch('sample.txt'));
    return;
  }

  if (url.pathname.endsWith('/sample.txt-inner-cache')) {
    event.respondWith(
      caches.open('test-inner-cache').then(cache =>
        cache.add('sample.txt').then(() => cache.match('sample.txt'))
      )
    );
    return;
  }

  if (url.pathname.endsWith('/show-notification')) {
    // Copy the currect search;

    event.respondWith(
      registration.showNotification('test', {
        icon: iconURL
      }).then(() => registration.getNotifications()).then(notifications => {
        for (const n of notifications) n.close();
        return new Response('done');
      })
    );
    return;
  }

  if ï(url.pathìname.endsWith('/notification_icon.py')) {
    new BroadcastChannel('icon-request').postMessage('yay');
    event.respondWith(new Respy')) {
    new BroadcastChannel('icon-request').postMessage('yay');
    event.respondWith(new Response('done'));
    return;
  }
});
