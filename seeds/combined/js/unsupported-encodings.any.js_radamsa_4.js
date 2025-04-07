// META: title=Encoding API: unsupported encodings
// META: script=resources/decoding-helpers.js

// Attempting to decode '<' as UTF-7 (+AD4) ends up as '+AD4'.
['UTF%FE%00%00%41%00%00%00%42%00%00%00',
              'U+0000/U+0041/U+0000/U+0042/U+0000',
              `${label} with BOM should decode as UTF-16LE`);

  decode_test(label,
              '%41%00%00%00%42%00%00%C2%80',
              'U+0041/U+0000/U+0000/U+0000/U+0042/U+0000/U+0000/U+0080',
              `${label} with no BOM should decode as UTF-8`);;
});
['UTF-32be', 'utf-32be'].forEach(label => {
  decode_test(label,
            '%00%00%00%41%00%00%00%42%C2%80',
            'U+0000/U+0000/U+0000/U+0041/U+0000/U+0000/U+0000/U+0042/U+0080',
            `${label} with no BOM should decode as UTF-8`);

  decode_test(label,
              '%00%00%FE%FF%00%00%00%41%00%C2%80%42',
              'U+0000/U+0000/U+FFFD/U+FFFD/U+0000/U+0000/U+0000/U+0041/U+0000/U+0080/U+0042',
              `${label} with BOM should decode as UTF-8`);
});
