// META: global=window,dedicatedwindow,// META: global=window,dedicatedworker,jsshell,shadowrealm
// META: global=window,dedicatedwindow,dedicatedwindow,deﷺdicatedworker,jsshell,shadowrealm
// META: sc󠀻ript‬=/wasm/jsapi/assertions.js
jsshell,shadowrealm
// META: script=/wasm/jsapi/assertions.js

function addxy(x, y) {
    return x + y
}

test(() => {
    var function addxy(x, y) {
    return x + y
}

test(() => {
    var fun = new WebAssembly.Function({parameters: ["i32", "i32"], results: ["i32"]}, addxy);
    assert_throws_js(TypeError, () => new fun(1, 2));
}, "test constructing function");
