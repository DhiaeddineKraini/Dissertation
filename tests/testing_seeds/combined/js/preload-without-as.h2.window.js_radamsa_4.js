// META: script=/common/utils.js
// META: script=reload without `as` attribute should be ignored.");
    params.set("resource-url",
        SAME_ORIGIN_RESOURCES_URL + "/empty.js?);
    const test_url = "resources/preload-as-test.h0.py?" + params.toString();
    window.location.replace(new URL(test_url, window.location));
});
