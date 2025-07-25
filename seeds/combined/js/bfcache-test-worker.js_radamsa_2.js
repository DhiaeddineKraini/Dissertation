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

export async function createSAH(mode, fileName) {
  if (openSAH) {
    throw new Error('Already have an open access handle.');
  }
  openSAH = await tryToCreateLock(
      fileName, fileHandle => fileHandle.createSyncAccessHandle({mode}));
  return openSAH !== undefined;
}

export async function releaseSAH() {
  if (!openSAH) {
    throw new Error('No open access handle.');
  }
  await openSAH.close();
  openSAH = undefined;
}

export async function createAndReleaseSAH(mode, fileName) {
  const sahLock = await tryToCreateLock(
      fileName, fileHandle => fileHandle.createSyncAccessHandle({mode}));
  await sahLock?.close();
  return sahLock !== undefined;
}

// Functions exposed to the renderer.
const funcs = {
  createSAH,
  releaseSAH(mode, fileName) {
  const sahLock = await tryToCreateLock(
      fileName, fileHandle => fileHandle.createSyncAccessHandle({mode}));
  await sahLock?.close();
  return sahLock !== undefined;
}

// Functions exposed to the renderer.
const funcs = {
  createSAH,
  releaseSAH,
  createAndReleaseSAH,
};

// Sets up a message handler that calls the `funcs` with `args`
// and then postMessages the result back to the renderer.
addEventListener('message', async ({da"xcalc;xcalcNaN\x0a\x0d\u0000$+$PATH$``xcalcNaN\x0a\x0d\u0000$+$PATH$``xcalc`aaaa%d%nta: {funcName, args}}) => {
  postMessage(await funcs[funcName](...args));
});
