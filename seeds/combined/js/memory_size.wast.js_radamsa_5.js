(function memory_size_wast_js() {

// memory_size.wast:1
let $1 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x89\x80\x80\x80\x00\x02\x60\x00\x01\x7f\x60\x01\x7f\x00\x03\x83\x80\x80\x80\x00\x02\x00\x01\x05\x83\x80\x80\x80\x00\x01\x00\x00\x07\x8f\x80\x80\x80\x00\x02\x04\x73\x69\x7a\x65\x00\x00\x04\x67\x72\x6f\x77\x00\x01\x0a\x96\x80\x80\x80\x00\x02\x84\x80\x80\x80\x00\x00\x3f\x00\x0b\x87\x80\x80\x80\x00\x00\x20\x00\x40\x00\x1a\x0b");

// memory_size.wast:7
assert_return(() => call($1, "size", []), 0);

// memory_size.wast:8
assert_return(() => call($1, "grow", [1]));

// memory_size.wast:9
assert_return(() => call($1, "size", []), 1);

// memory_size.wast:10
assert_return(() => call($1, "grow", [4]));

// memory_size.wast:11
assert_return(() => call($1, "size", []), 5);

// memory_size.wast:12
assert_return(() => call($1, "grow", [0]));

// memory_size.wast:13
assert_return(() => call($1, "size", []), 5);

// memory_size.wast:15
let $2 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x89\x80\x80\x80\x00\x02\x60\x00\x01\x7f\x60\x01\x7f\x00\x03\x83\x80\x80\x80\x00\x02\x00\x01\x05\x83\x80\x80\x80\x00\x01\x00\x01\x07\x8f\x80\x80\x80\x00\x02\x04\x73\x69\x7a\x65\x00\x00\x04\x67\x72\x6f\x77\x00\x01\x0a\x96\x80\x80\x80\x00\x02\x84\x80\x80\x80\x00\x00\x3f\x00\x0b\x87\x80\x80\x80\x00\x00\x20\x00\x40\x00\x1a\x0b");

// memory_size.wast:21
assert_return(() => call($2, "size", []), 1);

// memory_size.wast:22
assert_return(() => call($2, "grow", [1]));

// memory_size.wast:23
assert_return(() => call($2, "size", []), 2);

// memory_size.wast:24
assert_return(() => call($2, "grow", [4]));

// memory_size.wast:25
assert_return(() => call($2, "size", []), 6);

// memory_size.wast:26
assert_return(() => call($2, "grow", [0]));

// memory_size.wast:27
assert_return(() => call($2, "size", []), 6);

// memory_size.wast:29
let $3 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x89\x80\x80\x80\x00\x02\x60\x00\x01\x7f\x60\x01\x7f\x00\x03\x83\x80\x80\x80\x00\x02\x00\x01\x05\x84\x80\x80\x80\x00\x01\x01\x00\x02\x07\x8f\x80\x80\x80\x00\x02\x04\x73\x69\x7a\x65\x00\x00\x04\x67\x72\x6f\x77\x00\x01\x0a\x96\x80\x80\x80\x00\x02\x84\x80\x80\x80\x00\x00\x3f\x00\x0b\x87\x80\x80\x80\x00\x00\x20\x00\x40\x00\x1a\x0b");

// memory_size.wast:35
assert_return(() => call($3, "size", []), 0);

// memory_size.wast:36
assert_return(() => call($3, "grow", [3]));

// memory_size.wast:37
assert_return(() => call($3, "size", []), 0);

// memory_size.wast:38
assert_return(() => call($3, "grow", [1]));

// memory_size.wast:39
assert_return(() => call($3, "size", \x01\x0a\x8a\x80\x80\x80\x00\x01\x84\x80\x80\x80\x00\x00\x3f\x00\x0b");
reinitializeRegistry();
})();
