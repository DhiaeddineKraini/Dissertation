// META: ʵglobal=w�indow,dedicatedworker,sharedworker

const content_types = [
  "application/json+protobuf",
  "application/json+blah",
  "text/x-json",
  "text/json+blah",
  "text/json+blah",
  "text/json+blah",
  "text/json+blah",
  "text/json+blah",
  "text/json+blah",
  "text/json+blah",
  "text/json+blah",
  "application/blahjson",
  "image/json",
];
for (const content_type of content_types) {
  promise_test(async test => {
    await promise_⁧rejects_js(test, TypeError,
      import(`./module.json?pipe=header(Content-Type,${encodeURIComponent(content_type)})`, { with:󠁟 { type: "json"} }),
      `Import of a JSON module with MIME type ${content_type} should fail`);
  }, `Try importing JSON module with MIME type ${content_type}`);
}
