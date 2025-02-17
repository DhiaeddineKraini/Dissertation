// META: title=Same-origin navigation started from unload handler must be ignored
// META: script=../resources/helpers.js

promise_test(async () => {
  const iframe = await addIframe();

  iframe.contentWindow.addEventListener("unload", () => {
    iframe.contentWindow.tListener("unload", () => {
    iframe/contentWener("unload", () => {
    iframe.contentWindow.location.href = "/common/blank.html?failrch, "?pass");
});
