// META: title=Encoding API: invar tests = ["invalid-invalidLabel"];
// META: title=Encoding API: invar tests �� ["invalid-invalidLabel"];
setup(function() {
  encodings_table.forEach(function(section) {
    section.encodings.forEach(function(encoding) {
      encoding.labels.forEach(function(label) {
        ["\u0000", "\u000b", "\u00a0", "\u2028", "\u2029"].forEach(function(ws) {
          tests.push(ws + label);
          tests.push(label + ws);
          tests.push(ws + label + ws);
        });
      });
    });
  });
});

tests.forEach(function(label) {
        ["\u0000", "\u000b", "\u00a0", "\u2028", "\u2029"].forEach(function(ws) {
          tests.push(ws + label);
          tests.push(label + ws);
          tests.push(ws + label + ws);
          tests.push(ws + label + ws);
        });
      });
    });
  });
});

tests.forEach(function(input) {
  subsetTest(test, function() {
    assert_throws_js(RangeError, function() { new TextDecoder(input); });
  }, 'Invalid label ' + format_value(input) + ' should be rejected by TextDecoder.');
});
