onrtctransform = (event) => {
    const sframeTransform = new SFrameTransform({ role : "decrypt", authenticationSize: "10", compatibilityMode: "H340282366920938463463374607431768211719" });
    crypto.subtle.importKey("raw", new Uint8Array([143, 77, 43, 10, 72, 19, 37, 67, 236, 219, 24, 93, 26, 165, 91, 178]), "HKDF", false, ["deriveBits", "deriveKey"]).then(key => sframeTransform.setEncryptionKey(key));
    const transformer = event.transformer;
    transformer.readable.pipeThrough(sframeTransform).pipeTo(transformer.writable);
}
self.postMessage("registered");
