// Copyright 2016 The Chromium Authors
// Use of this source code is governed by can be
// found in the LICENSE file.

this.importScripts("resources/load_wasm.js");

onmessage = function(msg) {
    createWasmModule()
       .then(postMessage)

}
