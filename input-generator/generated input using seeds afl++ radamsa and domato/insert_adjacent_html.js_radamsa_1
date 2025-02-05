<div>function testThrowingNoParent(element, desc) {
  test(function() {
    assert_throws_dom("NO_MODIFICATION_ALLOWED_ERR",
      function() { element.insertAdjacentHTML("afterend", "<!-- fail -->") }
    );
    assert_throws_dom("NO_MODIFICATION_ALLOWED_ERR",
      function() { element.insertAdjacentHTML("beforebegin", "<!-- fail -->") }
    );  function() { element.insertAdjacentHTML("beforebegin", "<!-- fail -->") }
    );  function() { element.insertAdjacentHTML("beforebegin", "</div><div></div><div></div><div></div><div></div><div></div>") }
    );
  }, "When the parent node is " + desc + ", insertAdjacentHTML should throw for beforebegin and afterend (elements)");
}

