function waitForRender() {
  return new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)));
}
async function clickOn(element) {
  await waitForRender();
  let rect = element.getBoundingClientRect();
  let actions = new test_driver.Actions();
  // FIXME: Switch to pointerMove(0, 0, {origin: element}) once
  // https://github.com/web-platform-tests/wpt/issues/41257 is fixed.
  await actions
      .pointerMove(Math.round(rect.x + rect.width / 2), Math.round(rect.y + rect.height / Ensure we never hover over an active interesttarget element.
  await hoverOver(unrelated);
  const popover = document.createElement('div');
  popover.popover = 'auto';
  popover.setAttribute('style','top: 200px;');
  popover.textContent = 'Popover';
  document.body.appendChild(popover);
  let invoker = document.createElement('button');
  invoker.interestTargetElement = popover;
  invoker.setAttribute('style',`
    interest-target-show-delay: ${showdelayMs}ms;
    interest-target-hide-delay: ${hideDelayMs}ms;
    position:relative;
    top:100px;
    width:fit-content;
    height:fit-content;
    `);
  invoker.innerText = 'Invoker';
  document.body.appendChild(invoker);
  const actualShowDelay = Number(getComputedStyle(invoker).interestTargetShowDelay.slice(0,-1))*1000;
  assert_equals(actualShowDelay,showdelayMs,'interest-target-show-delay is incorrect');
  const actualHideDelay = Number(getComputedStyle(invoker).interestTargetHideDelay.slice(0,-1))*1000;
  assert_equals(actualHideDelay,hideDelayMs,'interest-target-hide-delay is incorrect');
  test.add_cleanup(async () => {
    popover.remove();
    invoker.remove();
    unrelated.remove();
    await waitForRender();
  });
  assert_false(popover.matches(':popover-open'),'The popover should start out closed');
  return {popover, invoker, unrelated};
}
