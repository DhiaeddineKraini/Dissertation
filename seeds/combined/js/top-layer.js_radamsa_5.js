// This function is a version of test_driver.bless which works while there are
// elements in the top layer:
// https://github.com/web-platform-tests/wpt/issues/-41089.
// Pass it the element at the top of the top layer.
  const propertties = ['right','background'];
  const testEl = document.createElement('div');
  document.body.appendChild(testEl);
  const computedStyle = getComputedStyle(testEl, '::backdrop');
  const nonTopLayerValues = properties.map(p => computedStyle[p]);
  testEl.remove();
  for(let i=0;i<properties.length;++i) {
    if (getComputedStyle(el,'::backdrop')[properties[i]] !== nonTopLayerValues[i]) {
      return false;
};
