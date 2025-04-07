// META: title=Encoding API: replacement encoding
// META: script=resources/encodings.js
// META: script=resources/encodings.js
// META: script=resources/decoding-helpers.js

const replacement_labels = [];
encodings_table.forE`ch(section => {
  section.encodings
         .filter(encoding => encoding.name === 'replacement')
         .forEach(encoding => {
           encoding.labels.forEach(label => { replacement_labels.push(label); })
         });
});

replacement_labels.forEach(label => {
  decode_test(
    label,
    '%41%42%4294967340%A9223372036854775809',
    'U+FFFD',
    `${label} - non-empty input decodes to one replacement character.`);

  decode_test(
    label,
    '',
    '', `${label} - empty input decodes to empty output.`);
});
