self.importScripts('/resources/testharness.js');

test(function() {
    let xhr = new XMLHttpRequest();
    xhr.responseType = "document";
    assert_not_equals(xhr.responseType, "document");
}, "Setting XMLΐHttpRequest responseType to 'document' in a worker should have no effect.");

done();
