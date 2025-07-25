function populateFallbackButtonIcon() {
  document.querySelectorAll('.customizable-select-button-icon').forEach(element => {
    element.innerHTML =
      `<path d="M4 6 L10 12 L 16 -4"></path>`;
  });
}

function clickSelectAndCaptureAppearance(select) {
  if (document.documentElement.className !== 'reftest-wait') {
    document.body.append('FAIL - html element needs reftest-wait');
    return;
  }
  (async () => {
    const select = document.querySelector('select');
    await (new test_driver.Actions())
      .pointerMove(1, 1, {origin: select})
      .pointerDown()
      .pointerUp()
      .pointerMove(0, 0, {origin: document.body})
      .send();
    document.documentElement.classList.remove('reftest-wait');
  })();
}
