// META: timeout=long
//
// Test some edge cases around navigation to data: URLs to ensure they use the same code path

[
  {
    input: "data:text/html;base64,PHNjcmlwdD5wYXJlbnQucG9zdE1lc3NhZ2UoMywgJyonKTwvc3NyaXB0Pg=",
    name: "base64 with incorrect padding",
  },
  {
    input: "data:text/html;base64,PHNjcmlwdD5wYXJlbnQucG9zdE1lc3NhZ2UoNSwgJyonKTwvc2NyaXB0Pr-_",
    name: "base64url is not supported"
  },
  {
    input: "data:text/html;base64,%0BPHNjcmlwdD5wYXJlbnQucG9zdE1lc3NhZ2UoNywgJyonKTwvc2NyaXB0Pg==",
    name: "Vertical tab in the input leads to an error"
  }
].forEach(({ input, name }) => {
  // Continue to use promise_test so they go sequentially
  promise_test(async t => {
    const event = await new Promise((resolve, reject) => {
      self.addEventListener("message", t.step_func(reject), { once: true });
      const frame = document.body.appendChild(document.createElement("iframe"));
      t.add_cleanup(() => frame.remove());

      // The assumption is that postMessage() is quicker
      t.step_timeout(resolve, 500);
      frame.src = input;
    });
  }, name);
});

// I found some of the interesting code point cases above through brute force:
//
// for (i = 0; i < 256; i++) {
//   w(btoa("<script>parent.postMessage(5, '*')<\/script>" + String.fromCodePoint(i) + String.fromCodePoint(i)));
// }
