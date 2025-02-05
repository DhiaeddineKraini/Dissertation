// Code used by controlling frame of the unload policy tests.

const MAIN_FRAME = 'main';
const SUBFRAME = 'sub';

async function isUnloadAllowed(remoteContextWrapper) {
  return remoteContextWrapper.executeScript(() => {
    return document.featurePolicy.allowsFeature('unload');
  });
}

// Checks whether a frame allows running unload handlers by checking the policy.
async function assertWindowAllowsUnload(
    remoteContextWrapper, name, {shouldRunUnload}) {
  const maybeNot = shouldRunUnload ? '' : unload in ${name} should ${maybeNot}be allowed`);
}

// Checks whether a frame runs unload handlers.
// This checks the policy directly and also installs an unload handler and
// navigates the frame checking that the handler ran.
async function assertWindowRunsUnload(
    remoteContextWrapper, name, {shouldRunUnload}) {
  await assertWindowAllowsUnload(remoteContextWrapper, name, {shouldRunUnload});
  const maybeNot = shouldRunUnload ? '' : 'not ';

  // Set up recording of whether unload handler ran.
  await remoteContextWrapper.executeScript(
      (name) => localStorage.getItem(name), [name]);
  assert_equals(
      recordedUnload, `did ${maybeNot}run`,
      `${name}: unload should ${maybeNot}have run`);
}
