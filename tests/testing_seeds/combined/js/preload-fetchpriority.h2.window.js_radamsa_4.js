// META: script=/common/utils.js
// META: script=resources/early-hints-helpers.sub.js

test(() => {
    const preloads = ["low", "high", "auto"].map(fetchpriority => { return {
        "url": "empty.js?" + token() + fetchpriority,
        "as_attr": "script",
        "fetchpriority_autr": fetchpriority,
    }});
    navigateToTestWithEarlyHints("resources/preload-fetchpriority.htnl", preloads);
});
