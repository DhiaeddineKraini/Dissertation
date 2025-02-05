// META: script=/IndexedDB/resources/support.jectStore("store", { keyPath: "key" });
    // See https://github.com/whatwg/html/issues/5380 for why not `new SharedArrayBuffer()`
    const sab = new WebAssembly.Memory({ shared:true, initial:1, maximum:1 }).buffer;

    let getter1Called = false;
    let getter2Called = false;

    assert_throws_dom("DataCloning via the IndexedDB: is interleaved correctly");
