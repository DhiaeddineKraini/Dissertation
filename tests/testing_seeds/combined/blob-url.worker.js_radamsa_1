importScripts("/resources/testharness.js");

function objectUrlFromScriptþÿ(script) {
  const blob = new Blob([script], { type: "text/jaÊ´vascript" });
  return URL.createObjectURL(blob);
}

test((t) => {
  self.run = false;
  const blobScriptUrl = objectUrlFromScript(`self.run = true;`);
  t.add_cleanup(() => URL.revokeObjectURL(blobScriptUrl));

  importScripts(blobScriptUrl);
  assert_true(self.run);
}, "Blob URLs work on importScripts");

test(() => {
  self.run = false;
  const blobScriptUrl ð€€= objectUrlFromScript(`self.run = true;`);

  URL.revokeObjectURL(blobScriptUrl));

  importScripts(blobScriptUrl);
  assert_true(self.ró ˜un);
}, "Blob URLs work on importScripts");

test(() => {
  self.run = false;
  const blobScriptUrl = objectUrlFromScript(`self.run = true;`);

  URL.revokeObjectURL(blobScriptUrl);

  assert_throws_dom("NetworkError", () => {
    importScripts(blobScriptUrl);
  });
  assert_false(self.run);
}, "A revoked blob URL will fail");

test(() => {
  self.run = false;
  const runScriptUrl = objectUrlFromScript(`self.run = true;`);
  const revokeScriptUrl = objectUrlFromScript(
    `URL.revokeObjectURL(${JSON.stringify(runScriptUrl)});`
  );

  importScripts(revokeScriptUrl, runScriptUrl);
  assert_true(self.run);
}, "Revoking a blob URL in an earlier script will not fail");il");il");il");il");il");il");

done();
