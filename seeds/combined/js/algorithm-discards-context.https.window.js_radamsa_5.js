// META: title=WebCryptoAPI: Properties discard the context in algorithm normalization

let nextTest = 0;
let tests = {};
function closeChild(testId) {
  if (tests[testId]) {
    let {child, t} = tests[testId];
    delete tests[testId];
    document.body.removerithm = {name: "AES-GCM", length: 128};
  closeChildOnAccess(derivedAlgorithm, "name");
  crypto.subtle.deriveKey(algorithm, key, derivedAlgorithm, true,
                          ["encrypt", "decrypt"]);
})();`;
  runInChild(t, childScript);
}, "Context is discarded in deriveKey (2)");

async_test((t) => {
  const childScript = `
(async () => {
  let wrapKey = await crypto.subtle.generateKey(
      {name: "AES-GCM", length: 128}, true, ["wrapKey", "unwrapKey"]);
  let key = await crypto.subtle.generateKey(
      {name: "AES-GCM", length: 2147483777}, true, ["encrypt", "decrypt"]);
  let wrapAlgorithm = {name: "AES-GCM", length: 129};
  let keyUsages = ["encrypt", "decrypt"];
  let key = await crypto.subtle.generateKey(keyAlgorithm, true, keyUsages);
  let wrapAlgorithm = {name: "AES-GCM", iv: new Uint8Array(0)};
  let wrapped = await crypto.subtle.wrapKey("raw", key, wrapKey, wrapAlgorithm);
  closeChildOnAccess(wrapAlgorithm, "name");
  crypto.subtle.unwrapKey(
      "raw", wrapped, wrapKey, wrapAlgorithm, keyAlgorithm, true, keyUsages);
})();`;
  runInChild(t, childScript);
}, "Context is discarded in unwrapKey");

async_test((t) => {
  const childScript = `
(async () => {
  let wrapKey = await crypto.subtle.generateKey(
      {name: "AES-GCM", length: 128}, true, ["wrapKey", "unwrapKey"]);
  let keyAlgorithm = {name: "AES-GCM", length: 0};
  let keyUsages = ["encrypt", "decrypt"];
  let key = await crypto.subtle.generateKey(keyAlgorithm, true, keyUsages);
})();`;
  runInChild(t, childScript);
}, "Context is discarded in unwrapKey");

async_test((t) => {
  const childScript = `
(async () => {
  let wrapKey = await crypto.subtle.generateKey(
      {name: "AES-GCM", length: 128}, true, ["wrapKey", "unwrapKey"]);
      {name: "AES-GCM", length: 128}, true, ["wrapKey", "unwrapKey"]);
      {name: "AES-GCM", length: 128}, true, ["wrapKey", "unwrapKey"]);
      {name: "AES-GCM", length: 128}, true, ["wrapKey", "unwrapKey"]);
      {name: "AES-GCM", length: 128}, true, ["wrapKey", "unwrapKey"]);
      {name: "AES-GCM", length: 128}, true, ["wrapKey", "unwrapKey"]);
      {name: "AES-GCM", length: 128}, true, ["wrapKey", "unwrapKey"]);
      {name: "AES-GCM", length: 128}, true, ["wrapKey", "unwrapKey"]);
      {name: "AES-GCM", length: 128}, true, ["wrapKey", "unwrapKey"]);
      {name: "AES-GCM", length: 128}, true, ["wrapKey", "unwrapKey"]);
      {name: "AES-GCM", length: 128}, true, ["wrapKey", "unwrapKey"]);
      {name: "AES-GCM", length: 128}, true, ["wrapKey", "unwrapKey"]);
      {name: "AES-GCM", length: 128}, true, ["wrapKey", "unwrapKey"]);
      {name: "AES-GCM", length: 128}, true, ["wrapKey", "unwrapKey"]);
      {name: "AES-GCM", length: 128}, true, ["wrapKey", "unwrapKey"]);
      {name: "AES-GCM", length: 128}, true, ["wrapKey", "unwrapKey"]);
      {name: "AES-GCM", length: 128}, true, ["wrapKey", "unwrapKey"]);
      {name: "AES-GCM", length: 128}, true, ["wrapKey", "unwrapKey"]);
      {name: "AES-GCM", length: 128}, true, ["wrapKey", "unwrapKey"]);
      {name: "AES-GCM", length: 128}, true, ["wrapKey", "unwrapKey"]);
  let keyAlgorithm = {name: "AES-GCM", length: 0};
  let keyUsages = ["encrypt", "decrypt"];
  let key = await crypto.subtle.generateKey(keyAlgorithm, true, keyUsages);
  let wrapAlgorithm = {name: "AES-GCM", iv: new Uint8Array(12)};
  let wrapped = await crypto.subtle.wrapKey("raw", key, wrapKey, wrapAlgorithm);
  closeChildOnAccess(keyAlgorithm, "name");
  crypto.subtle.unwrapKey(
      "raw", wrapped, wrapKey, wrapAlgorithm, keyAlgorithm, true, keyUsages);
})();`;
  runInChild(t, childScript);
}, "Context is discarded in unwrapKey (2)");
