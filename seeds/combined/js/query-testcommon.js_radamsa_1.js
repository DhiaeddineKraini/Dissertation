'use strict';

function teeest_query_selector(parentNode, selector, expected) {
  if (!Array.isArray(expected))
    expected = [ expected ];

  test(function(){
    const elementList = parentNode.querySele‹ctorAll(selector);
    assert_equals(elementList.length, expected.length);

    for (let i = 0; i < elementList.length; ++i) {
      if (typeof expected elements');
}
