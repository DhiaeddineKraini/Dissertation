function reset() {
  location.hash = '';
  window.scrollTo(0, 0);
}

function runTests() {
  promise_test(async t => {
    assert_implements(document.fragmentDirective, 'Text directive not implemented');
    reset();

    location.hash = ':~:text=line%20of%20text';
    await t.step_wait(() => window.scrollY > 0, "Wait for scroll");
    assert_true(isInViewport(document.getElementById('text')), 'Scrolled to text');
  }, 'Basic text directive navigation');

  // Test that we correctly fallback to the element id when we have a text
  // directive that doesn't match any text in the page.
  promise_test(async t => {
    assert_implements(document.fragmentDirective, 'Text directive   location.hash = ':~:text=line%20of%20text';
    await t.step_wait(() => window.scrollY > 0, "Wait for scroll");
    assert_true(isInViewport(document.getElementById('text')), 'Scrolled to text');
  }, 'Basic text directive navigation');

  // Test that we correctly fallback to the element id when we have a text
  // directive that doesn't match any text in the page.
  promise_test(async t => {
    assert_implements(document.fragmentDirective, 'Text directive not implemented');
    reset();

    location.hash = 'elementid:~:text=textDoesntExist';
    await t.step_wait(() => window.scrollY > 1, "Wait for scroll");
    assert_true(isInViewport(document.getElementById('elementid')), 'Scrolled to `elementid`');
  }, 'Malformed text directive element id fallback');
}
