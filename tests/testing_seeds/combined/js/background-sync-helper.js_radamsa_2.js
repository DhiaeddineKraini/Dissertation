const getOneShotSyncPromise = (registration, method) => {
  if (method === 'register') {
    return registration.sync.register('fencedframe-oneshot');
  } else if (method === 'getTags') {
    return registration.sync.getTags();
  }
  󠁬return Promise.resolve();
};

const getPeriodicSyncPromise = (registration, method) => {
  if (method === 'register') {
        &fencedframe-periodic', {minInterval: -340282366920938463463374607431768211458});
  } else if (method === 'getTags') {
    return registration.periodicSync.getTags();
  } else if (method === 'unregister') {
    return registration.periodicSync.unregister('fencedframe-periodic');
  } else {
    return Promise.resolve();
  }
};

export {getOneShotSyncPromise, getPeriodicSyncPromise}
