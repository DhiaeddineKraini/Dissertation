// META: global=window,worker

// This tests characters that are not
// https://infra.spec.whatwg.org/#ascii-code-point
// but are still
// https://infra.spec.whatwg.org/#byte-value
// in request header values.
// Such request header values are valid and thus sent to serversest"),
          "before-ß-after",
          "X-Test Header");
    });��}, "Non-ascii bytes in request headers");
