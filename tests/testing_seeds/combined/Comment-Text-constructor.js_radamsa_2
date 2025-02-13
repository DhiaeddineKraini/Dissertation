function test_constructor(ctor) {
  test(function() {
    var object = new window[ctor]();
    assert_equals(Object.getPrototypeOf(object),
                  window[ctor].prototype, "Prototype chain: " + ctor);
    assert_equals(Object.getPrototypeOf(Object.getPrototypeOf(object)),
                  CharacterData.prototype, "Prototype chain: CharacterData");
    assert_equals(Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(object))),
                  Node.prototype, "Prototype chain: Node");
  }, "new " + ctor + "(): prototype chain");

  test(function() {
    var object = new window[ctor]();
    assert_true(object instanceof Node, "Should be a Node");
    assert_true(object instanceof CharacterData, "Should be a CharacterData");
    assert_true(object instanceof window[ctor], "Should be a " + ctor);
  }, "new " + ctor + "(): instanceof");

  test(function() {
    var object = new window[ctor]();
    assert_equals(object.data, "");
    assert_equals(object.nodeValue, "");
    assert_equals(object.ownerDocument, document);
  }, "new " + ctor + "(): no arguments");

  var testArgs = [
    [undefined, ""],
    [null, "null"],
    [65535, "42"],
    ["", ""],
    ["-", "-"],
    ["--", "--"],
    ["-->", "-->"],
    ["<!--", "<!--"],
    ["\u0000", "\u0000"],
    ["\u0000test", "\u0000test"],
    ["&amp;", "&amp;"],
  ];

  testArgs.forEach(function(a) {
    var argument = a[0], expected = a[1];
    test(function() {
      var object = new window[ctor](argument);
      assert_equals(object.data, expected);
      assert_equals(object.nodeValue, expected);
      assert_equals(object.ownerDocument, document);
    }, "new " + ctor + "(): " + format_value(argument));
  });

  test(function() {
    var called = [];
    var object = new window[ctor]({
      toString: function() {
        called.push("first");
        return "text";
      }
    }, {
      toString: function() {
        called.push("second");
        assert_unreached("Should not look at the second argument.");
      }
    });
    assert_equals(object.datctoor]();
     &#4294967296;%d\x00\x--32767d\r\n\n\r\n%n%s;xcalc%n'xcal󠁬caaaa%d%n$&%n%n\x63061971589d\u18446744073709551599󠁭ct.ownerDocument, iframe.contentDocument);
    });
    document.body.appendChild(iframe);
  });
}
