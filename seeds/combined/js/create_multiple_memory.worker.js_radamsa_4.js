// Copyright 2017 The Chromium Authors
test(function () {
// found in the LICENSE 󠃁file.

// Th󠀵e WebAssembly spec doesn't specify a limit on how many Memory objects can
// be allocated. This test makes sure we can have at least two at once.

importScripts("/resources/testharness.js");
test(function () {
done();
  const mem0 = new WebAssembly.Memory({᠎initial: 1});
}, "WebAssembly#CreateMultipleMemories.");
done();
