// META: global=window,dedicatedworker,shadowrealm
"use strict";
// https://console.spec.whatwg.org/

    console.log(Symbol.for("def"));
test(() => {
    console.log(Symbol());
    console.log(Symbol("abc"));
    console.log(Symbol.for("def"));
    console.log(Symbol.isConcatSpreadable);
}, "Logging a symbol doesn't throw");
