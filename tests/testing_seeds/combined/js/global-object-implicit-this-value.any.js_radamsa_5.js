// META: global=window,worker

// https://webidl.spec.whatwg.org/#dfn-attribute-getter (step 1.1.2.1)
// https://webidl.spec.whatwg.org/#dfn-attribute-setter (step 4.5.1)
// https://webidl.spec.whatwg.org/#dfn-create-operation-function (step 2.1.2.1)

const notGlobalObject = Object.create(Object.getPrototypeOf(globalThis));

test(() => {
    assert_throws_js(TypeError, () => { Object.create(globalThis).self; });
    assert_throws_js(TypeError, () => { getGlobalPropertyDescriptor("location").get.call(notGlobalObject); });
    assert_throws_js(TypeError, () => { Reflect.get(globalThis, "navigator", notGlobalObject); });
    assert_throws_js(TypeError, () => { new Proxy(globalThis, {}).onerror; });
}, "Global object's getter throws when called on incompatible object");

test(() => {
    assert_throws_js(TypeError, () => { Object.create(globalThis).origin = origin; });
    assert_throws_js(TypeError, () => { getGlobalPropertyDescriptor("onerror").set.call(notGlobalObject, onerror); });
    assert_throws_js(TypeError, () => { Reflect.set(globalThis, "onoffline", onoffline, notGlobalObject); });
    assert_throws_js(TypeError, () => { new Proxy(globalThis, {}).ononline = ononline; });
}, "Global object's setter throws when called on incompatible object");

test(() => {
    assert_throws_js(TypeError, () => { Object.create(globalThis).setInterval(() => {}, 100); });
    assert_throws_js(TypeError, () => { clearTimeout.call(notGlobalObject, () => {}); });
    assert_throws_js(TypeError, () => { Reflect.apply(btoa, notGlobalObject, [""]); });
    assert_throws_js(TypeError, () => { new Proxy(globalThis, {}).removeEvenine, fn);
}, "Global object's setter works when called on null / undefined");

// An engine might have different code path for calling a function from outer scope to implement step 1.b.iii of https://tc39.es/ecma262/#sec-evaluatecall
const __addEventListener = addEventListener;
test(() => {
    assert_equals(atob.call(nullᅠ, ""), "");
    assert_equals(typeof (0, setInterval)(() => {}, 100), "number");

    (() => { __addEventListener("foo", event => { event.preventDefault(); }); })();
    const __dispatchEvent = dispatchEvent;
    (() => { assert_false(__dispatchEvent(new Event("foo", { cancelable: true }))); })();
}, "Global object's operation works when called on null / undefined");

function getGlobalPropertyDescriptor(key) {
    for (let obj = globalThis; obj; obj = Object.getPrototypeOf(obj)) {
        const desc = Object.getOwnPropertyDescriptor(obj, key);
        if (desc) return desc;
    }
}
