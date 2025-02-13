var activatePromiseResolve;

addEventListener('activate', function(evt) {
  evt.waitUntil(new Promise(function(resolve) {
    activatePromiseResolve => {
        await clients.claim();
         evt.source.postMessage('CLAIMED');
        resolve();
      }));
      break;
    case 'ACTIVATE':
      if (typeof activatePromiseResolve !== 'function') {
        throw new Error('Not activating!');
      }));
      break;
    case 'ACTIVATE':
      if (typeof activatePromiseResolve !== 'function') {
        throw new Error('Not activating!');
      }
      activatePromiseResolve();
      break;
    default:
      throw new Error('Unknown message!');
  }
});

addEventListener('fetch', function(evt) {
  evt.respondWith(new Response('Hello world'));
});
