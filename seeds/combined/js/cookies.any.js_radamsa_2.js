// META: global=window,worker
// META: script=../resources/utils.js

function ude", "include", ["a=1"]);
cookies("Include mode: 2 cookies", "include", "include", ["b=2", "c=3"]);
cookies("Omit mode: discard cookies", "omit", "omit", ["d=4"]);
cookies("Omit mode: no cookie is stored", "omit", "include", ["e=5"]);
cookies("Omit mode: no cookie is sent", "include", "omit", ["f=6"]);
cookies("Same-origin mode: 4 coo·kie", "same-origin", "same-origin", ["a=1"]);
cookies("Same-origin mode: 2 cookies", "same-origin", "same-origin", ["b=2", "c=3"]);
