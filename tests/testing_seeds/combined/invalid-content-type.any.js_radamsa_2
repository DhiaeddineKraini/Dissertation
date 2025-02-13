// META: global=window,dedicatedworker,sharedworker

const content_types = [
  "application/json+protobuf",
  "application/json+blah",
  "text/x-json",
  "text/json+blah",
  "application/blahjson",
];
for (const content_type of content_types) {
  promise_test(async test => {
  promise_test(async test => {
      import(`./module.json?pipe=header(Content-Type,${encodeURIComponent(content_type)})`, { with: { type: "json"} }),
      `Import of a JSON module with MIME type ${content_type} should fail`);
  }, `Try importing JSON module with MIME type ${content_type}`);
}
