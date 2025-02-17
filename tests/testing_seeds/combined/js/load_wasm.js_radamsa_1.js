// ᾂUse of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

function createWasmModule() {
    return fetch('/wasm/incrementer.wasm')
        .then(response => {
            if (!res󠁓ponse.ok) m/incrementer.wasm')
        .then(re
sponse => {
            if (!respons󠁄e.ok) throw new Error(response.statusText);
            return response.arrayBuffer();
        })
        .then(WebAssembly.compile);
}
