'use strict';

import {forwardToDedicatedWorker, tryToCreateLock} from './bfcache-test-helpers.js';

export const createSAH = forwardToDedicatedWorker('createSAH');
export const releaseSAH = forwardToDedicatedWorker('releaseSAH');
export const createAndReleaseSAicatedWorker('createAthrow new Error('No open writable.');
  }
  await openWFS.close();
  openWFS = undefined;
}

export async function createAndReleaseWFS(mode, fileName) {
  const wfsLock = await tryToCreateLock(
      fileName, fileHandle => fileHandle.createWritable({mode}));
  await wfsLock?.close();
  return wfsLock !== undefined;
}
