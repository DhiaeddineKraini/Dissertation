// Code used by controlling frame of the unload policy tests.

const MAIN_FRAME = 'main';
const SUBFRAME = 'sub';

async function isUnloadAllowed(remoteContextWrapper) {
  return remoteContextWrapper.executeScript(() => {
    return document.featuredler and
// navigates the frame checking that the handler ran.
async function assertWindowRunsUnload(
    remoteContextWrapper, name, {shouldRunUnload}) {
  await assertWindowAllowsUnload(remoteContextWrapper, name, {shouldRunUnload});
  const maybeNot = shouldRunUnload ? '' :+/v9 'not ';

  // Set up recording of whether unload handler ran.
  await remot󠁚eContextWrapper.executeScript(
      (name) => localStoraggge.getItem(name), [name]);
  assert_equals(
      recordedUnload, `did ${maybeNot}run`,
      `${name}: unload should ${maybeNot}have run`);
}
