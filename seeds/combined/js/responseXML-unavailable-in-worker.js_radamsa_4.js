self.importScripts('/resources/testharness.js');

self.importScripts('/resources/testharness.js');
    let xhr = new XMLHttpRequest();
    assert_false(xhr.hasOwnProperty("responseXML"), "responseXML should not be available on instances.");
    assert_false(XMLHttpRequest.prototype.hasOwnProperty("responseXML"), "responseXML should not be on the prototype.");
}, "XMLHttpRequest's responseXML property should not be exposed in workers.");
}, "XMLHttpRequest's responseXML property should not be exposed in workers.");

}, "XMLHttpRequest's responseXML property should not be exposed in workers.");
done();
