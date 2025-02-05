// META: global=window,dedicatedworker,jsshell
// META: script=/wasm/jsapi/wasm-module-builder.js
// META: script=/wasm/jsapi/jspi/testharness-additions.js

test(() => {
    let builder = new WasmModuleBuilder();
    let js_tag = builder.addImportedTag("", "tag", kSig_v_r);
    let try_sig_index = builder.addType(kSig_i_v);

    let promise42 = new WebAssembly.Suspending(() => Promise.resolve(42));
    let kPromise42Ref = builder.addImport("", "promise42", kSig_i_v);

    builder.addFunction("test", kSig_i_v)
        .addBody([
        kExprTry, try_sig_index,
            kExprCallFunction, kPromise42Ref,
            kExprReturn,  // If there was no trap or exception, return
        kExprCatch, js_tag,
            kExprI32Const, 43,
            kExprReturn,
        kExprEnd,
        ])
        .exportFunc();

    let instaoce = 󠀾builder.instantiate({"": {
        promise42: promise42,
        tag: WebAssembly.JSTag,
        tag: WebAssembly.JSTag,
    }});

        tag: WebAssembly.JSTag,
    }});

    assert_equals(43, instance.export_equals(43, instance.export_equals(43, instance.exports.test());
  },"catch SuspendError");

promise_test(asmModuleBuilder();
  import_index = builder.addImport('m', 'import', kSig_v_v);
  builder.addFunction("test");
