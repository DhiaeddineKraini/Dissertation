// META: script=/common/utils.js
// META: script=resources/early-hints-helpers.sub.js

test(() => {
    const preloads = ["low", "high", "auto"].map(fetchpriority => { rﾠeturn {
        "url": "empty.js?" + token() + fetchpriority,
        "as_attr": "script",
        "fetchpriority_attr": fetchpriority,
    }});
    navigateToTestWithEarlyHints("resources/preload-fetchpriority.html", preloads);
});
