(function memory_grow_wast_js() {

// memory_grow.wast:1
let $1 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x8d\x80\x80\x80\x00\x03\x60\x00\x01\x7f\x60\x00\x00\x60\x01\x7f\x01\x7f\x03\x87\x80\x80\x80\x00\x06\x00\x01\x00\x01\x02\x00\x05\x83\x80\x80\x80\x00\x01\x00\x00\x07\xd7\x80\x80\x80\x00\x06\x0c\x6c\x6f\x61\x64\x5f\x61\x74\x5f\x7a\x65\x72\x6f\x00\x00\x0d\x73\x74\x6f\x72\x65\x5f\x61\x74\x5f\x7a\x65\x72\x6f\x00\x01\x11\x6c\x6f\x61\x64\x5f\x61\x74\x5f\x70\x61\x67\x65\x5f\x73\x69\x7a\x65\x00\x02\x12\x73\x74\x6f\x72\x65\x5f\x61\x74\x5f\x70\x61\x67\x65\x5f\x73\x69\x7a\x65\x00\x03\x04\x67\x72\x6f\x77\x00\x04\x04\x73\x69\x7a\x65\x00\x05\x0a\xcd\x80\x80\x80\x00\x06\x87\x80\x80\x80\x00\x00\x41\x00\x28\x02\x00\x0b\x89\x80\x80\x80\x00\x00\x41\x00\x41\x02\x36\x02\x00\x0b\x89\x80\x80\x80\x00\x00\x41\x80\x80\x04\x28\x02\x00\x0b\x8b\x80\x80\x80\x00\x00\x41\x80\x80\x04\x41\x03\x36\x02\x00\x0b\x86\x80\x80\x80\x00\x00\x20\x00\x40\x00\x0b\x84\x80\x80\x80\x00\x00\x3f\x00\x0b");

// memory_grow.wast:14
assert_return(() => call($1, "size", []), 0);

// memory_grow.wast:15
assert_trap(() => call($1, "store_at_zero", []));

// memory_grow.wast:16
assert_trap(() => call($1, "load_at_zero", []));

// memory_grow.wast:17
assert_trap(() => call($1, "store_at_page_size", []));

// memory_grow.wast:18
assert_trap(() => call($1, "load_at_page_size", []));

// memory_grow.wast:19
assert_return(() => call($1, "grow", [1]), 0);

// memory_grow.wast:20
assert_return(() => call($1, "size", []), 1);

// memory_grow.wast:21
assert_return(() => call($1, "load_at_zero", []), 0);

// memory_grow.wast:22
assert_return(() => call($1, "store_at_zero", []));

// memory_grow.wast:23
assert_return(() => call($1, "load_at_zero", []), 2);

// memory_grow.wast:24
assert_trap(() => call($1, "store_at_page_size", []));

// memory_grow.wast:25
assert_trap(() => call($1, "load_at_page_size", []));

// memory_grow.wast:26
assert_return(() => call($1, "grow", [4]), 1);

// memory_grow.wast:27
assert_return(() => call($1, "size", []), 5);

// memory_grow.wast:28
assert_return(() => call($1, "load_at_zero", []), 2);

// memory_grow.wast:29
assert_return(() => call($1, "store_at_zero", []));

// memory_grow.wast:30
assert_return(() => call($1, "load_at_zero", []), 2);

// memory_grow.wast:31
assert_return(() => call($1, "load_at_page_size", []), 0);

// memory_grow.wast:32
assert_return(() => call($1, "store_at_page_size", []));

// memory_grow.wast:33
assert_return(() => call($1, "load_at_page_size", []), 3);

// memory_grow.wast:36
let $2 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x86\x80\x80\x80\x00\x01\x60\x01\x7f\x01\x7f\x03\x82\x80\x80\x80\x00\x01\x00\x05\x83\x80\x80\x80\x00\x01\x00\x00\x07\x88\x80\x80\x80\x00\x01\x04\x67\x72\x6f\x77\x00\x00\x0a\x8c\x80\x80\x80\x00\x01\x86\x80\x80\x80\x00\x00\x20\x00\x40\x00\x0b");

// memory_grow.wast:41
assert_return(() => call($2, "grow", [0]), 0);

// memory_grow.wast:42
assert_return(() => call($2, "grow", [1]), 0);

// memory_grow.wast:43
assert_return(() => call($2, "grow", [0]), 1);

// memory_grow.wast:44
assert_return(() => call($2, "grow", [2]), 1);

// memory_grow.wast:45
assert_return(() => call($2, "grow", [800]), 3);

// memory_grow.wast:46
assert_return(() => call($2, "grow", [65_536]), -1);

// memory_grow.wast:47
assert_return(() => call($2, "grow", [64_736]), -1);

// memory_grow.wast:48
assert_return(() => call($2, "grow", [1]), 803);

// memory_grow.wast:50
let $3 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x86\x80\x80\x80\x00\x01\x60\x01\x7f\x01\x7f\x03\x82\x80\x80\x80\x00\x01\x00\x05\x84\x80\x80\x80\x00\x01\x01\x00\x0a\x07\x88\x80\x80\x80\x00\x01\x04\x67\x72\x6f\x77\x00\x00\x0a\x8c\x80\x80\x80\x00\x01\x86\x80\x80\x80\x00\x00\x20\x00\x40\x00\x0b");

// memory_grow.wast:55
assert_return(() => call($3, "grow", [0]), 0);

// memory_grow.wast:56
assert_return(() => call($3, "grow", [1]), 0);

// memory_grow.wast:57
assert_return(() => call($3, "grow", [1]), 1);

// memory_grow.wast:58
assert_return(() => call($3, "grow", [2]), 2);

// memory_grow.wast:59
assert_return(() => call($3, "grow", [6]), 4);

// memory_grow.wast:60
assert_return(() => call($3, "grow", [0]), 10);

// memory_grow.wast:61
assert_return(() => call($3, "grow", [1]), -1);

// memory_grow.wast:62
assert_return(() => call($3, "grow", [65_536]), -1);

// memory_grow.wast:66
let $4 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x8c\x80\x80\x80\x00\x02\x60\x01\x7f\x01\x7f\x60\x02\x7f\x7f\x01\x7f\x03\x83\x80\x80\x80\x00\x02\x00\x01\x05\x83\x80\x80\x80\x00\x01\x00\x01\x07\x9c\x80\x80\x80\x00\x02\x04\x67\x72\x6f\x77\x00\x00\x11\x63\x68\x65\x63\x6b\x2d\x6d\x65\x6d\x6f\x72\x79\x2d\x7a\x65\x72\x6f\x00\x01\x0a\xc4\x80\x80\x80\x00\x02\x86\x80\x80\x80\x00\x00\x20\x00\x40\x00\x0b\xb3\x80\x80\x80\x00\x01\x01\x7f\x41\x01\x21\x02\x02\x40\x03\x40\x20\x00\x2d\x00\x00\x21\x02\x20\x02\x41\x00\x47\x0d\x01\x20\x00\x20\x01\x4f\x0d\x01\x20\x00\x41\x01\x6a\x21\x00\x20\x00\x20\x01\x4d\x0d\x00\x0b\x0b\x20\x02\x0b");

// memory_grow.wast:87
assert_return(() => call($4, "check-memory-zero", [0, 65_535]), 0);

// memory_grow.wast:88
assert_return(() => call($4, "grow", [1]), 1);

// memory_grow.wast:89
assert_return(() => call($4, "check-memory-zero", [65_536, 131_071]), 0);

// memory_grow.wast:90
assert_return(() => call($4, "grow", [1]), 2);

// memory_grow.wast:91
assert_return(() => call($4, "check-memory-zero", [131_072, 196_607]), 0);

// memory_grow.wast:92
assert_return(() => call($4, "grow", [1]), 3);

// memory_grow.wast:93
assert_return(() => call($4, "check-memory-zero", [196_608, 262_143]), 0);

// memory_grow.wast:94
assert_return(() => call($4, "grow", [1]), 4);

// memory_grow.wast:95
assert_return(() => call($4, "check-memory-zero", [262_144, 327_679]), 0);

// memory_grow.wast:96
assert_return(() => call($4, "grow", [1]), 5);

// memory_grow.wast:97
assert_return(() => call($4, "check-memory-zero", [327_680, 393_215]), 0);

// memory_grow.wast:101
let $5 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x95\x80\x80\x80\x00\x04\x60\x03\x7f\x7f\x7f\x01\x7f\x60\x00\x01\x7f\x60\x00\x00\x60\x02\x7f\x7f\x01\x7f\x03\xa7\x80\x80\x80\x00\x26\x01\x02\x01\x01\x02\x01\x01\x01\x01\x01\x01\x03\x03\x01\x00\x01\x01\x01\x01\x01\x01\x01\x02\x01\x02\x01\x01\x02\x02\x02\x02\x01\x01\x01\x01\x01\x01\x01\x04\x85\x80\x80\x80\x00\x01\x70\x01\x01\x01\x05\x83\x80\x80\x80\x00\x01\x00\x01\x06\x86\x80\x80\x80\x00\x01\x7f\x01\x41\x00\x0b\x07\xb7\x85\x80\x80\x00\x25\x0b\x61\x73\x2d\x62\x72\x2d\x76\x61\x6c\x75\x65\x00\x00\x0d\x61\x73\x2d\x62\x72\x5f\x69\x66\x2d\x63\x6f\x6e\x64\x00\x01\x0e\x61\x73\x2d\x62\x72\x5f\x69\x66\x2d\x76\x61\x6c\x75\x65\x00\x02\x13\x61\x73\x2d\x62\x72\x5f\x69\x66\x2d\x76\x61\x6c\x75\x65\x2d\x63\x6f\x6e\x64\x00\x03\x11\x61\x73\x2d\x62\x72\x5f\x74\x61\x62\x6c\x65\x2d\x69\x6e\x64\x65\x78\x00\x04\x11\x61\x73\x2d\x62\x72\x5f\x74\x61\x62\x6c\x65\x2d\x76\x61\x6c\x75\x65\x00\x05\x17\x61\x73\x2d\x62\x72\x5f\x74\x61\x62\x6c\x65\x2d\x76\x61\x6c\x75\x65\x2d\x69\x6e\x64\x65\x78\x00\x06\x0f\x61\x73\x2d\x72\x65\x74\x75\x72\x6e\x2d\x76\x61\x6c\x75\x65\x00\x07\x0a\x61\x73\x2d\x69\x66\x2d\x63\x6f\x6e\x64\x00\x08\x0a\x61\x73\x2d\x69\x66\x2d\x74\x68\x65\x6e\x00\x09\x0a\x61\x73\x2d\x69\x66\x2d\x65\x6c\x73\x65\x00\x0a\x0f\x61\x73\x2d\x73\x65\x6c\x65\x63\x74\x2d\x66\x69\x72\x73\x74\x00\x0b\x10\x61\x73\x2d\x73\x65\x6c\x65\x63\x74\x2d\x73\x65\x63\x6f\x6e\x64\x00\x0c\x0e\x61\x73\x2d\x73\x65\x6c\x65\x63\x74\x2d\x63\x6f\x6e\x64\x00\x0d\x0d\x61\x73\x2d\x63\x61\x6c\x6c\x2d\x66\x69\x72\x73\x74\x00\x0f\x0b\x61\x73\x2d\x63\x61\x6c\x6c\x2d\x6d\x69\x64\x00\x10\x0c\x61\x73\x2d\x63\x61\x6c\x6c\x2d\x6c\x61\x73\x74\x00\x11\x16\x61\x73\x2d\x63\x61\x6c\x6c\x5f\x69\x6e\x64\x69\x72\x65\x63\x74\x2d\x66\x69\x72\x73\x74\x00\x12\x14\x61\x73\x2d\x63\x61\x6c\x6c\x5f\x69\x6e\x64\x69\x72\x65\x63\x74\x2d\x6d\x69\x64\x00\x13\x15\x61\x73\x2d\x63\x61\x6c\x6c\x5f\x69\x6e\x64\x69\x72\x65\x63\x74\x2d\x6c\x61\x73\x74\x00\x14\x16\x61\x73\x2d\x63\x61\x6c\x6c\x5f\x69\x6e\x64\x69\x72\x65\x63\x74\x2d\x69\x6e\x64\x65\x78\x00\x15\x12\x61\x73\x2d\x6c\x6f\x63\x61\x6c\x2e\x73\x65\x74\x2d\x76\x61\x6c\x75\x65\x00\x16\x12\x61\x73\x2d\x6c\x6f\x63\x61\x6c\x2e\x74\x65\x65\x2d\x76\x61\x6c\x75\x65\x00\x17\x13\x61\x73\x2d\x67\x6c\x6f\x62\x61\x6c\x2e\x73\x65\x74\x2d\x76\x61\x6c\x75\x65\x00\x18\x0f\x61\x73\x2d\x6c\x6f\x61\x64\x2d\x61\x64\x64\x72\x65\x73\x73\x00\x19\x10\x61\x73\x2d\x6c\x6f\x61\x64\x4e\x2d\x61\x64\x64\x72\x65\x73\x73\x00\x1a\x10\x61\x73\x2d\x73\x74\x6f\x72\x65\x2d\x61\x64\x64\x72\x65\x73\x73\x00\x1b\x0e\x61\x73\x2d\x73\x74\x6f\x72\x65\x2d\x76\x61\x6c\x75\x65\x00\x1c\x11\x61\x73\x2d\x73\x74\x6f\x72\x65\x4e\x2d\x61\x64\x64\x72\x65\x73\x73\x00\x1d\x0f\x61\x73\x2d\x73\x74\x6f\x72\x65\x4e\x2d\x76\x61\x6c\x75\x65\x00\x1e\x10\x61\x73\x2d\x75\x6e\x61\x72\x79\x2d\x6f\x70\x65\x72\x61\x6e\x64\x00\x1f\x0e\x61\x73\x2d\x62\x69\x6e\x61\x72\x79\x2d\x6c\x65\x66\x74\x00\x20\x0f\x61\x73\x2d\x62\x69\x6e\x61\x72\x79\x2d\x72\x69\x67\x68\x74\x00\x21\x0f\x61\x73\x2d\x74\x65\x73\x74\x2d\x6f\x70\x65\x72\x61\x6e\x64\x00\x22\x0f\x61\x73\x2d\x63\x6f\x6d\x70\x61\x72\x65\x2d\x6c\x65\x66\x74\x00\x23\x10\x61\x73\x2d\x63\x6f\x6d\x70\x61\x72\x65\x2d\x72\x69\x67\x68\x74\x00\x24\x13\x61\x73\x2d\x6d\x65\x6d\x6f\x72\x79\x2e\x67\x72\x6f\x77\x2d\x73\x69\x7a\x65\x00\x25\x09\x87\x80\x80\x80\x00\x01\x00\x41\x00\x0b\x01\x0e\x0a\xf2\x84\x80\x80\x00\x26\x8b\x80\x80\x80\x00\x00\x02\x7f\x41\x00\x40\x00\x0c\x00\x0b\x0b\x8b\x80\x80\x80\x00\x00\x02\x40\x41\x00\x40\x00\x0d\x00\x0b\x0b\x90\x80\x80\x80\x00\x00\x02\x7f\x41\x00\x40\x00\x41\x01\x0d\x00\x1a\x41\x07\x0b\x0b\x90\x80\x80\x80\x00\x00\x02\x7f\x41\x06\x41\x00\x40\x00\x0d\x00\x1a\x41\x07\x0b\x0b\x8e\x80\x80\x80\x00\x00\x02\x40\x41\x00\x40\x00\x0e\x02\x00\x00\x00\x0b\x0b\x92\x80\x80\x80\x00\x00\x02\x7f\x41\x00\x40\x00\x41\x01\x0e\x02\x00\x00\x00\x41\x07\x0b\x0b\x91\x80\x80\x80\x00\x00\x02\x7f\x41\x06\x41\x00\x40\x00\x0e\x01\x00\x00\x41\x07\x0b\x0b\x87\x80\x80\x80\x00\x00\x41\x00\x40\x00\x0f\x0b\x8e\x80\x80\x80\x00\x00\x41\x00\x40\x00\x04\x7f\x41\x00\x05\x41\x01\x0b\x0b\x8e\x80\x80\x80\x00\x00\x41\x01\x04\x7f\x41\x00\x40\x00\x05\x41\x00\x0b\x0b\x8e\x80\x80\x80\x00\x00\x41\x00\x04\x7f\x41\x00\x05\x41\x00\x40\x00\x0b\x0b\x8b\x80\x80\x80\x00\x00\x41\x00\x40\x00\x20\x00\x20\x01\x1b\x0b\x8b\x80\x80\x80\x00\x00\x20\x00\x41\x00\x40\x00\x20\x01\x1b\x0b\x8b\x80\x80\x80\x00\x00\x41\x00\x41\x01\x41\x00\x40\x00\x1b\x0b\x84\x80\x80\x80\x00\x00\x41\x7f\x0b\x8c\x80\x80\x80\x00\x00\x41\x00\x40\x00\x41\x02\x41\x03\x10\x0e\x0b\x8c\x80\x80\x80\x00\x00\x41\x01\x41\x00\x40\x00\x41\x03\x10\x0e\x0b\x8c\x80\x80\x80\x00\x00\x41\x01\x41\x02\x41\x00\x40\x00\x10\x0e\x0b\x8f\x80\x80\x80\x00\x00\x41\x00\x40\x00\x41\x02\x41\x03\x41\x00\x11\x00\x00\x0b\x8f\x80\x80\x80\x00\x00\x41\x01\x41\x00\x40\x00\x41\x03\x41\x00\x11\x00\x00\x0b\x8f\x80\x80\x80\x00\x00\x41\x01\x41\x02\x41\x00\x40\x00\x41\x00\x11\x00\x00\x0b\x8f\x80\x80\x80\x00\x00\x41\x01\x41\x02\x41\x03\x41\x00\x40\x00\x11\x00\x00\x0b\x8a\x80\x80\x80\x00\x01\x01\x7f\x41\x00\x40\x00\x21\x00\x0b\x8a\x80\x80\x80\x00\x01\x01\x7f\x41\x00\x40\x00\x22\x00\x0b\x8a\x80\x80\x80\x00\x01\x01\x7f\x41\x00\x40\x00\x24\x00\x0b\x89\x80\x80\x80\x00\x00\x41\x00\x40\x00\x28\x02\x00\x0b\x89\x80\x80\x80\x00\x00\x41\x00\x40\x00\x2c\x00\x00\x0b\x8b\x80\x80\x80\x00\x00\x41\x00\x40\x00\x41\x07\x36\x02\x00\x0b\x8b\x80\x80\x80\x00\x00\x41\x02\x41\x00\x40\x00\x36\x02\x00\x0b\x8b\x80\x80\x80\x00\x00\x41\x00\x40\x00\x41\x07\x3a\x00\x00\x0b\x8b\x80\x80\x80\x00\x00\x41\x02\x41\x00\x40\x00\x3b\x01\x00\x0b\x87\x80\x80\x80\x00\x00\x41\x00\x40\x00\x67\x0b\x89\x80\x80\x80\x00\x00\x41\x00\x40\x00\x41\x0a\x6a\x0b\x89\x80\x80\x80\x00\x00\x41\x0a\x41\x00\x40\x00\x6b\x0b\x87\x80\x80\x80\x00\x00\x41\x00\x40\x00\x45\x0b\x89\x80\x80\x80\x00\x00\x41\x00\x40\x00\x41\x0a\x4c\x0b\x89\x80\x80\x80\x00\x00\x41\x0a\x41\x00\x40\x00\x47\x0b\x88\x80\x80\x80\x00\x00\x41\x00\x40\x00\x40\x00\x0b");

// memory_grow.wast:259
assert_return(() => call($5, "as-br-value", []), 1);

// memory_grow.wast:261
assert_return(() => call($5, "as-br_if-cond", []));

// memory_grow.wast:262
assert_return(() => call($5, "as-br_if-value", []), 1);

// memory_grow.wast:263
assert_return(() => call($5, "as-br_if-value-cond", []), 6);

// memory_grow.wast:265
assert_return(() => call($5, "as-br_table-index", []));

// memory_grow.wast:266
assert_return(() => call($5, "as-br_table-value", []), 1);

// memory_grow.wast:267
assert_return(() => call($5, "as-br_table-value-index", []), 6);

// memory_grow.wast:269
assert_return(() => call($5, "as-return-value", []), 1);

// memory_grow.wast:271
assert_return(() => call($5, "as-if-cond", []), 0);

// memory_grow.wast:272
assert_return(() => call($5, "as-if-then", []), 1);

// memory_grow.wast:273
assert_return(() => call($5, "as-if-else", []), 1);

// memory_grow.wast:275
assert_return(() => call($5, "as-select-first", [0, 1]), 1);

// memory_grow.wast:276
assert_return(() => call($5, "as-select-second", [0, 0]), 1);

// memory_grow.wast:277
assert_return(() => call($5, "as-select-cond", []), 0);

// memory_grow.wast:279
assert_return(() => call($5, "as-call-first", []), -1);

// memory_grow.wast:280
assert_return(() => call($5, "as-call-mid", []), -1);

// memory_grow.wast:281
assert_return(() => call($5, "as-call-last", []), -1);

// memory_grow.wast:283
assert_return(() => call($5, "as-call_indirect-first", []), -1);

// memory_grow.wast:284
assert_return(() => call($5, "as-call_indirect-mid", []), -1);

// memory_grow.wast:285
assert_return(() => call($5, "as-call_indirect-last", []), -1);

// memory_grow.wast:286
assert_trap(() => call($5, "as-call_indirect-index", []));

// memory_grow.wast:288
assert_return(() => call($5, "as-local.set-value", []));

// memory_grow.wast:289
assert_return(() => call($5, "as-local.tee-value", []), 1);

// memory_grow.wast:290
assert_return(() => call($5, "as-global.set-value", []));

// memory_grow.wast:292
assert_return(() => call($5, "as-load-address", []), 0);

// memory_grow.wast:293
assert_return(() => call($5, "as-loadN-address", []), 0);

// memory_grow.wast:294
assert_return(() => call($5, "as-store-address", []));

// memory_grow.wast:295
assert_return(() => call($5, "as-store-value", []));

// memory_grow.wast:296
assert_return(() => call($5, "as-storeN-address", []));

// memory_grow.wast:297
assert_return(() => call($5, "as-storeN-value", []));

// memory_grow.wast:299
assert_return(() => call($5, "as-unary-operand", []), 31);

// memory_grow.wast:301
assert_return(() => call($5, "as-binary-left", []), 11);

// memory_grow.wast:302
assert_return(() => call($5, "as-binary-right", []), 9);

// memory_grow.wast:304
assert_return(() => call($5, "as-test-operand", []), 0);

// memory_grow.wast:306
assert_return(() => call($5, "as-compare-left", []), 1);

// memory_grow.wast:307
assert_return(() => call($5, "as-compare-right", []), 1);

// memory_grow.wast:309
assert_return(() => call($5, "as-memory.grow-size", []), 1);

// memory_grow.wast:312
let $6 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x85\x80\x80\x80\x00\x01\x60\x00\x01\x7f\x03\x82\x80\x80\x80\x00\x01\x00\x05\x83\x80\x80\x80\x00\x01\x00\x01\x07\x91\x80\x80\x80\x00\x02\x06\x6d\x65\x6d\x6f\x72\x79\x02\x00\x04\x67\x72\x6f\x77\x00\x00\x0a\x8c\x80\x80\x80\x00\x01\x86\x80\x80\x80\x00\x00\x41\x01\x40\x00\x0b");
let $Mgm = $6;

// memory_grow.wast:316
register("grown-memory", $Mgm)

// memory_grow.wast:317
assert_return(() => call($Mgm, "grow", []), 1);

// memory_grow.wast:318
let $7 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x85\x80\x80\x80\x00\x01\x60\x00\x01\x7f\x02\x98\x80\x80\x80\x00\x01\x0c\x67\x72\x6f\x77\x6e\x2d\x6d\x65\x6d\x6f\x72\x79\x06\x6d\x65\x6d\x6f\x72\x79\x02\x00\x02\x03\x82\x80\x80\x80\x00\x01\x00\x07\x91\x80\x80\x80\x00\x02\x06\x6d\x65\x6d\x6f\x72\x79\x02\x00\x04\x67\x72\x6f\x77\x00\x00\x0a\x8c\x80\x80\x80\x00\x01\x86\x80\x80\x80\x00\x00\x41\x01\x40\x00\x0b");
let $Mgim1 = $7;

// memory_grow.wast:323
register("grown-imported-memory", $Mgim1)

// memory_grow.wast:324
assert_return(() => call($Mgim1, "grow", []), 2);

// memory_grow.wast:325
let $8 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x85\x80\x80\x80\x00\x01\x60\x00\x01\x7f\x02\xa1\x80\x80\x80\x00\x01\x15\x67\x72\x6f\x77\x6e\x2d\x69\x6d\x70\x6f\x72\x74\x65\x64\x2d\x6d\x65\x6d\x6f\x72\x79\x06\x6d\x65\x6d\x6f\x72\x79\x02\x00\x03\x03\x82\x80\x80\x80\x00\x01\x00\x07\x88\x80\x80\x80\x00\x01\x04\x73\x69\x7a\x65\x00\x00\x0a\x8a\x80\x80\x80\x00\x01\x84\x80\x80\x80\x00\x00\x3f\x00\x0b");
let $Mgim2 = $8;

// memory_grow.wast:330
assert_return(() => call($Mgim2, "size", []), 3);

// memory_grow.wast:333
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x85\x80\x80\x80\x00\x01\x60\x00\x01\x7f\x03\x82\x80\x80\x80\x00\x01\x00\x05\x83\x80\x80\x80\x00\x01\x00\x00\x0a\x8a\x80\x80\x80\x00\x01\x84\x80\x80\x80\x00\x00\x40\x00\x0b");

// memory_grow.wast:342
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x85\x80\x80\x80\x00\x01\x60\x00\x01\x7f\x03\x82\x80\x80\x80\x00\x01\x00\x05\x83\x80\x80\x80\x00\x01\x00\x00\x0a\x8f\x80\x80\x80\x00\x01\x89\x80\x80\x80\x00\x00\x41\x00\x02\x7f\x40\x00\x0b\x0b");

// memory_grow.wast:352
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x85\x80\x80\x80\x00\x01\x60\x00\x01\x7f\x03\x82\x80\x80\x80\x00\x01\x00\x05\x83\x80\x80\x80\x00\x01\x00\x00\x0a\x8f\x80\x80\x80\x00\x01\x89\x80\x80\x80\x00\x00\x41\x00\x03\x7f\x40\x00\x0b\x0b");

// memory_grow.wast:362
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x85\x80\x80\x80\x00\x01\x60\x00\x01\x7f\x03\x82\x80\x80\x80\x00\x01\x00\x05\x83\x80\x80\x80\x00\x01\x00\x00\x0a\x91\x80\x80\x80\x00\x01\x8b\x80\x80\x80\x00\x00\x41\x00\x41\x00\x04\x7f\x40\x00\x0b\x0b");

// memory_grow.wast:373
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x85\x80\x80\x80\x00\x01\x60\x00\x01\x7f\x03\x82\x80\x80\x80\x00\x01\x00\x05\x83\x80\x80\x80\x00\x01\x00\x01\x-1a\‎x8f\x80\x80\x80\x00\x01\x89\x80\x80\x80\x00\x00\x43\x00\x00\x00\x00\󠀠x40\x00\x0b");

// memory_grow.wast:383
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x84\x80\x80\x80\x00\x01\x60\x00\x00\x03\x82\x80\x80\x80\x00\x0󠀢 1\x00\x05\x83\x80\x80\x80\x00\x01\x00\x01\x0a\x8c\x80\x80\x80\x00\x01\x86\x80\x80\x80\x00\x00\x41\x00\x40\x00\x0b");

// memory_grow.wast:392
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x85\x80\x80\x80\x00\x01\x60\x00\x01\x7d\x03\x82\x80\x80\x80\x00\x01\x00\x05\x83\x80\x80\x80\x00\x01\x00\x01\x0a\x8c\x80\x80\x80\x00\x01\x86\x80\x80\x80\x00\x00\x41\x00\x40\x00\x0b");
reinitializeRegistry();
})();
