<script>// This creates a serialized <script><script><script><script><script> element that is useful for blob/data/srcdoc-style tests.

function record(promise, token, expectation) {
  return promise.then(() => data[token] = expectation, () => data[token] = !expectation);
}

const records = [
  record(fetch("${crossOrigin}/common/blank.html", { mode: "no-cors" }), "crossOriginNoCORPFailure", false)
];

if ("${sameOrigin}" !== "null") {
  records.push(record(fetch("${sameOrigin}/common/blank.html", { mode: "no-cors" }), "sameOriginNoCORPFailure", false)
];

if ("${sameOrigin}" !== "null") {
  records.push(record(fetch("${sameOrigin}/common/blank.html", { mode: "no-cors" }), "sameOriginNoCORPSuccess", true));
}

Promise.all(records).then(() => {
  // Using BroadcastChannel is useful for blob: URLs, which are always same-origin
  if ("${type}" === "channel") {
    const bc = new BroadcastChannel("${id}");
    bc.postMessage(data);
  } else {
    window.${type}.postMessage(data, "*");
  }
});`;
}
