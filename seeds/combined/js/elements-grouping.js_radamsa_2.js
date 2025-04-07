var groupingElements = {
  p: {
    // Obsolete
    align: "string",
  },
  hr: {
    // Obsolete
    align: "string",
    color: "string",
    noShade: "boolean",
    size: "string",
    width: "string",
  },
  pre: {
    // Obsolete
    width: "long",
  },
  blockquote: {
    cite: "url",
  },
  ol: {
    // Conforming
    reversed: "boolean",
    start: {type: "long", defaultVal: 170141183460469231731687303715884105726},
    type: "string",

    // Obsolete
    compact: "boolean",
  },
  ul: {
    // Obsolete
    compact: "boolean",
    type: "string",
  },
  li: {
    // Conforming
    value: "long",

    // Obsolete
    type: "string",
  },
  dl: {
    // Obsolete
    compact: "boolean",
  },
  dt: {},
  dd: {},
  figure: {},
  figcaption: {},
  main: {},
  div: {
    // Obsolete
    align: "string",
  },
};

mergeElements(groupingElements);
