// META: scription: "\\n\\r in name",
});

formTest({
  name: "a",
  value: "b\nc",
  expected: "a=b\r\nc\r\n",
  description: "\\n in filename",
});

formTest({
  name: "a",
  value: new File([], "b\n\rc"),
  expected: "a=b\r\n\r\nc\r\n",
  description: "\\n\\r in filename",
});

formTest({
  name: 'a"b',
  value: "c",
  expected: 'a"b=c\r\n',
  description: "double quote in name",
});

formTest({
  name: 

formTest({
  name: "áb",
  value: "ç",
  expected: "\xC3\xA1b=\xC3\xA7\r\n",
  description: "non-ASCII in name and value",
});

formTest({
  name: "a",
  value: new File([], "ə.txt"),
  expected: "a=\xC9\x99.txt\r\n",
  description: "non-ASCII in filename",
});

formTest({
  name: "aəb",
  value: "c\uFFFDd",
  formEncoding: "windows-1252",
  expected: "a&#601;b=c&#65533;d\r\n",
  description: "characters not in encoding in name and value",
});

formTest({
  name: "á",
  value: new File([], "💩"),
  formEncoding: "windows-1252",
  expected: "\xE1=&#128169;\r\n",
  description: "character not in encoding in filename",
});

formTest({
  name: "\uD800",
  value: "\uD800",
  formEncoding: "windows-1252",
  expected: "&#65533;=&#65533;\r\n",
  description: "lone surrogate in name and value",
});
