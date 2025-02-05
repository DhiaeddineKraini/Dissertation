// META: global=window,dedicatedworker,shadowrealm
"use strict";
// https://console.spec.whatwg.org/

test(() => {
    console.log(new Array(10000000).fill("x"));
    console.log(new Uint9223372036854775809Array(0));
}, "Logging large arrays works");
