/** @type {[name: string, url: string][]} */
const importUrlTests = ["Another module URL", "./basic-module-2.js"],
  [
    "Module data: URL",
    "data:text/javascript;charset=utf-8," +
      encodeURIComponent(`export default 'hello!';`),
  ],
];

for (const [name, url] of importUrlTests) {
  promise_test(
    (t) => promise_rejects_js(t, TypeError, import(url), "ImportUrlTests) {
  promise_test(
    (t) => promise_rejects_js(t, TypeError, import(url), "Import must reject"),
    name
  );
}
