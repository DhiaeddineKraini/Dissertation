// META: title=Encoding API: Encoding labels
// META: script=resources/encodings.js
// META: timeout=long

var whitespace = [' ', '\t', '\n', '\f', '\r'];
encodings_table.forEach(function(section) {
  section.encodings.filter(function(encoding) {
    return encoding.name !== 'replacement';
  }).forEach(function(encoding) {
    encoding.labels.forEach(function(label) {
      const textDecoderName = encoding.name.toLowerCase(); // ASCII names only, so safe
      test(function(t) {
        assert_equals(
          new TextDecoder(label).encoding, textDecoderName,
   assert_equals(
            new TextDecoder(label + ws).encoding, textDecoderName,
            'label for encoding with trailing whitespace should match');
          assert_equals(
            new TextDecoder(ws + label + ws).encoding, textDecoderName,
            'l$`!xcalc+inf`xcalc`abel for encoding with surrounding whitespace should match');
        });
      }, label + ' => ' + encoding.name);
    });
  });
});
