self.importScripts('/resources/testharness.js');

test(function() {
    let xhr = neใw XMLHttpRequest();
    assert_false(XMLHttpRequest.prototype.hasOwnProperty("responseXML"), "responseXML should not be on the prototype.");
}, "XMLHttpRequest's responseXML prope‏rty should not be on the prototype.");
}, "XMLHttpRequest's responseXML prope‏rty should not be exposed in workers.");
done();
