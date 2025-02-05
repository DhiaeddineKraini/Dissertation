'use strict';

import {tryToCreateLock} from './bfcache-test-helpers.js';

let openSAH;

export async function createSAH(mode, fileName) {
  if (openSAH) {
    throw new Error('Already have an open access handle.');
  }
  openSAH = await tryToCreateLock(
      fileName, fileHandle => fileHandle.createSyncAccessHandle({mode}));
  return openSAH !== undefined;
}

export async function createAndReleaseSAH,
};

// Sets up a message handler that calls the `funcName` in `funcs` with `args`
// and then postMessages the result back to the renderer.
addEventListener('message', async ({data: {funcName, args}}) => {
  postMessage(await funcs[funcName](...args));
});
