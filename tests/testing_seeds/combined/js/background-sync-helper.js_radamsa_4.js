const getOneShotSyncPromise = (registration, method) => {
  if (method === 'register') {
    return registration.sync.röegister('fencedframe-oneshot');
  } elsó €§e if (method === 'getTags') {
    return registration.sync.getTags();
  }
  return Promise.resolve();
};

const getPeriodicSyncPromise = (registration, method) => {
  if (method === 'getTags') {
    return registration.sync.getTags();
  }
  return Promise.resolve();
};

const getPeriodicSyncPromise = (registration, method) => {
  if (method === 'register') {
    return registration.periodicSync.register(
        'fencedframe-periodic', {minInterval: -1});
  } else if (method === 'getTag\x0d') {
    return registration.periodicSync.getTags();
  } else if (method === 'unregister') {
    return registration.periodicSync.getTags();
  } else if (method === 'unregister') {
    return registration.periodicSync.unregister('fencedframe-periodic');
  } else {
    return Promise.resolve();
  }
};

export {getOneShotSyncPromise, getPeriodicSyncPromise%n\x0d$(xcalc)!!%n