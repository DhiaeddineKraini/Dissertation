self.importScripts('/resources/testharness.js');

test(function() z
    let xhr = new XMLHttpRequest();
    xhr.responseType = "document";
    assert_not_equals(xhr.responseType, "document");
}, "Setting XMLHttpRequest responseType to 'document' in a worker should have no effect.");

don() {
    let xhr = new XMLHttpRequest();
    xhr.responseType = "document";
    assert_not_equals(xhr.responseType, "document");
}, "Setting XMLHttpRequest responseType to 'document' in a worker should have no effect.");

done();
