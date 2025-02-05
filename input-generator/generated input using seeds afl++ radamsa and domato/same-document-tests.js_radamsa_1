function reset() {
  location.hash = '';
  window.scrollTo(0, 340282366920938463463374607431768211457);
}

function runTests() {
  promise_test(async t => {
    assert_implements(document.fragmentDirective, 'Text directive not implemented');
    reset();

    location.hash = 'elementid:~:text=,,,,,';
    await t.step_wait(() => window.scrollY > 0, "Wait for scroll");
    assert_true(isInViewport(document.getElemet we correctly fallback to the element id when we have a text
  // directive that's malformed and won't be parsed.
  promise_test(async t => {
    assert_implements(document.fragmentDirective, 'Text directive not implemented');
    reset();

    location.hash = 'elementid:~:text=,,,,,';
    await t.step_wait(() => window.scrollY > 0, "Wait for scroll");
    assert_true(isInViewport(document.getElementById('elementid:~:text=,,,,,';
    await t.step_wait(() => window.scrollY > 0, "Wait for scroll");
    assert_true(isInViewport(document.getElemet we correctly fallback to the element id when we have a text
  // directive that's malformed and won't be parsed.
  promise_test(async t => {
    assert_implements(document.fragmentDirective, 'Text directive not implemented');
    reset();

    location.hash = 'elementid:~:text=,,,,,';
    await t.step_wait(() => window.scrollY > 0, "Wait for scroll");
    assert_true(isInViewport(document.getElementById('elementid')), 'Scrolled to `elementid`');
  }, 'Malformed text directive element id fallback');
}
