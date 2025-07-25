(function binary_leb128_wast_js() {

// binary-leb128.wast:2
let $1 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x05\x04\x01\x00\x82\x00");

// binary-leb128.wast:7
let $2 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x05\x07\x01\x00\x82\x80\x80\x80\x00");

// binary-leb128.wast:12
let $3 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x05\x06\x01\x01\x82\x00\x82\x00");

// binary-leb128.wast:18
let $4 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x05\x09\x01\x01\x82\x00\x82\x80\x80\x80\x00");

// binary-leb128.wast:24
let $5 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x05\x03\x01\x00\x00\x0b\x07\x01\x80\x00\x41\x00\x0b\x00");

// binary-leb128.wast:32
let $6 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x04\x04\x01\x70\x00\x00\x09\x09\x01\x02\x80\x00\x41\x00\x0b\x00\x00");

// binary-leb128.wast:41
let $7 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x00\x8a\x00\x01\x31\x32\x33\x34\x35\x36\x37\x38\x39");

// binary-leb128.wast:49
let $8 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x00\x0b\x88\x00\x31\x32\x33\x34\x35\x36\x37\x38\x39");

// binary-leb128.wast:57
let $9 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x08\x01\x60\x82\x00\x7f\x7e\x01\x7f");

// binary-leb128.wast:66
let $10 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x08\x01\x60\x02\x7f\x7e\x81\x00\x7f");

// binary-leb128.wast:75
let $11 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x05\x01\x60\x01\x7f\x00\x02\x17\x01\x88\x00\x73\x70\x65\x63\x74\x65\x73\x74\x09\x70\x72\x69\x6e\x74\x5f\x69\x33\x32\x00\x00");

// binary-leb128.wast:87
let $12 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x05\x01\x60\x01\x7f\x00\x02\x17\x01\x08\x73\x70\x65\x63\x74\x65\x73\x74\x89\x00\x70\x72\x69\x6e\x74\x5f\x69\x33\x32\x00\x00");

// binary-leb128.wast:99
let $13 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x05\x01\x60\x01\x7f\x00\x02\x17\x01\x08\x73\x70\x65\x63\x74\x65\x73\x74\x09\x70\x72\x69\x6e\x74\x5f\x69\x33\x32\x00\x80\x00");

// binary-leb128.wast:111
let $14 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x03\x01\x80\x00\x0a\x04\x01\x02\x00\x0b");

// binary-leb128.wast:120
let $15 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x07\x07\x01\x82\x00\x66\x31\x00\x00\x0a\x04\x01\x02\x00\x0b");

// binary-leb128.wast:133
let $16 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x07\x07\x01\x02\x66\x31\x00\x80\x00\x0a\x04\x01\x02\x00\x0b");

// binary-leb128.wast:146
let $17 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x05\x81\x00\x02\x00\x0b");

// binary-leb128.wast:158
let $18 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x06\x07\x01\x7f\x00\x41\x80\x00\x0b");

// binary-leb128.wast:165
let $19 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x06\x07\x01\x7f\x00\x41\xff\x7f\x0b");

// binary-leb128.wast:172
let $20 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x06\x0a\x01\x7f\x00\x41\x80\x80\x80\x80\x00\x0b");

// binary-leb128.wast:179
let $21 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x06\x0a\x01\x7f\x00\x41\xff\xff\xff\xff\x7f\x0b");

// binary-leb128.wast:187
let $22 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x06\x07\x01\x7e\x00\x42\x80\x00\x0b");

// binary-leb128.wast:194
let $23 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x06\x07\x01\x7e\x00\x42\xff\x7f\x0b");

// binary-leb128.wast:201
let $24 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x06\x0f\x01\x7e\x00\x42\x80\x80\x80\x80\x80\x80\x80\x80\x80\x00\x0b");

// binary-leb128.wast:208
let $25 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x06\x0f\x01\x7e\x00\x42\xff\xff\xff\xff\xff\xff\xff\xff\xff\x7f\x0b");

// binary-leb128.wast:217
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x05\x08\x01\x00\x82\x80\x80\x80\x80\x00");

// binary-leb128.wast:225
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x05\x0a\x01\x01\x82\x00\x82\x80\x80\x80\x80\x00");

// binary-leb128.wast:234
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x05\x03\x01\x00\x00\x0b\x0b\x01\x80\x80\x80\x80\x80\x00\x41\x00\x0b\x00");

// binary-leb128.wast:245
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x04\x04\x01\x70\x00\x00\x09\x0b\x01\x80\x80\x80\x80\x80\x00\x41\x00\x0b\x00");

// binary-leb128.wast:256
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x00\x83\x80\x80\x80\x80\x00\x01\x31\x32");

// binary-leb128.wast:267
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x00\x0a\x83\x80\x80\x80\x80\x00\x31\x32\x33\x34");

// binary-leb128.wast:278
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x0c\x01\x60\x82\x80\x80\x80\x80\x00\x7f\x7e\x01\x7f");

// binary-leb128.wast:290
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x0c\x01\x60\x02\x7f\x7e\x81\x80\x80\x80\x80\x00\x7f");

// binary-leb128.wast:302
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x05\x01\x60\x01\x7f\x00\x02\x1b\x01\x88\x80\x80\x80\x80\x00\x73\x70\x65\x63\x74\x65\x73\x74\x09\x70\x72\x69\x6e\x74\x5f\x69\x33\x32\x00\x00");

// binary-leb128.wast:317
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x05\x01\x60\x01\x7f\x00\x02\x1b\x01\x08\x73\x70\x65\x63\x74\x65\x73\x74\x89\x80\x80\x80\x80\x00\x70\x72\x69\x6e\x74\x5f\x69\x33\x32\x00\x00");

// binary-leb128.wast:332
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x05\x01\x60\x01\x7f\x00\x02\x1b\x01\x08\x73\x70\x65\x63\x74\x65\x73\x74\x09\x70\x72\x69\x6e\x74\x5f\x69\x33\x32\x00\x80\x80\x80\x80\x80\x00");

// binary-leb128.wast:347
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x03\x01\x80\x80\x80\x80\x80\x00\x0a\x04\x01\x02\x00\x0b");

// binary-leb128.wast:359
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x07\x0b\x01\x82\x80\x80\x80\x80\x00\x66\x31\x00\x00\x0a\x04\x01\x02\x00\x0b");

// binary-leb128.wast:375
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x07\x0b\x01\x02\x66\x31\x00\x80\x80\x80\x80\x80\x00\x0a\x04\x01\x02\x00\x0b");

// binary-leb128.wast:391
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x05\x81\x80\x80\x80\x80\x00\x02\x00\x0b");

// binary-leb128.wast:404
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x05\x03\x01\x00\x01\x0a\x11\x01\x0f\x01\x01\x7f\x41\x00\x28\x02\x82\x80\x80\x80\x80\x80\x80\x80\x80\x80\x00\x1a\x0b");

// binary-leb128.wast:423
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x05\x03\x01\x00\x01\x0a\x11\x01\x0f\x01\x01\x7f\x41\x00\x28\x82\x80\x80\x80\x80\x00\x00\x1a\x0b");

// binary-leb128.wast:442
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x05\x03\x01\x00\x01\x0a\x12\x01\x10\x01\x01\x7f\x41\x00\x41\x03\x36\x82\x80\x80\x80\x80\x00\x03\x0b");

// binary-leb128.wast:461
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x05\x03\x01\x00\x01\x0a\x12\x01\x10\x01\x01\x7f\x41\x00\x41\x03\x36\x02\x82\x80\x80\x80\x80\x80\x80\x80\x80\x80\x00\x0b");

// binary-leb128.wast:482
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x06\x0b\x01\x7f\x00\x41\x80\x80\x80\x80\x80\x00\x0b");

// binary-leb128.wast:492
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x06\x0b\x01\x7f\x00\x41\xff\xff\xff\xff\xff\x7f\x0b");

// binary-leb128.wast:503
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x06\x10\x01\x7e\x00\x42\x80\x80\x80\x80\x80\x80\x80\x80\x80\x80\x00\x0b");

// binary-leb128.wast:513
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x06\x10\x01\x7e\x00\x42\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x7f\x0b");

// binary-leb128.wast:525
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x05\x07\x01\x00\x82\x80\x80\x80\x70");

// binary-leb128.wast:533
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x05\x07\x01\x00\x82\x80\x80\x80\x40");

// binary-leb128.wast:541
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x05\x09\x01\x01\x82\x00\x82\x80\x80\x80\x10");

// binary-leb128.wast:550
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x05\x09\x01\x01\x82\x00\x82\x80\x80\x80\x40");

// binary-leb128.wast:559
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x05\x03\x01\x00\x00\x0b\x0a\x01\x80\x80\x80\x80\x10\x41\x00\x0b\x00");

// binary-leb128.wast:570
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x04\x04\x01\x70\x00\x00\x09\x0a\x01\x80\x80\x80\x80\x10\x41\x00\x0b\x00");

// binary-leb128.wast:581
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x00\x83\x80\x80\x80\x10\x01\x31\x32");

// binary-leb128.wast:592
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x00\x09\x83\x80\x80\x80\x40\x31\x32\x33\x34");

// binary-leb128.wast:603
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x0b\x01\x60\x82\x80\x80\x80\x10\x7f\x7e\x01\x7f");

// binary-leb128.wast:615
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x0b\x01\x60\x02\x7f\x7e\x81\x80\x80\x80\x40\x7f");

// binary-leb128.wast:627
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x05\x01\x60\x01\x7f\x00\x02\x1a\x01\x88\x80\x80\x80\x10\x73\x70\x65\x63\x74\x65\x73\x74\x09\x70\x72\x69\x6e\x74\x5f\x69\x33\x32\x00\x00");

// binary-leb128.wast:642
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x05\x01\x60\x01\x7f\x00\x02\x1a\x01\x08\x73\x70\x65\x63\x74\x65\x73\x74\x89\x80\x80\x80\x40\x70\x72\x69\x6e\x74\x5f\x69\x33\x32\x00\x00");

// binary-leb128.wast:657
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x05\x01\x60\x01\x7f\x00\x02\x1a\x01\x08\x73\x70\x65\x63\x74\x65\x73\x74\x09\x70\x72\x69\x6e\x74\x5f\x69\x33\x32\x00\x80\x80\x80\x80\x10");

// binary-leb128.wast:672
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x06\x01\x80\x80\x80\x80\x10\x0a\x04\x01\x02\x00\x0b");

// binary-leb128.wast:685
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x07\x0a\x01\x82\x80\x80\x80\x10\x66\x31\x00\x00\x0a\x04\x01\x02\x00\x0b");

// binary-leb128.wast:701
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x07\x0a\x01\x02\x66\x31\x00\x80\x80\x80\x80\x10\x0a\x04\x01\x02\x00\x0b");

// binary-leb128.wast:717
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x08\x81\x80\x80\x80\x10\x02\x00\x0b");

// binary-leb128.wast:730
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x05\x03\x01\x00\x01\x0a\x10\x01\x0e\x01\x01\x7f\x41\x00\x28\x02\x82\x80\x80\x80\x80\x80\x80\x80\x80\x10\x1a\x0b");

// binary-leb128.wast:750
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x05\x03\x01\x00\x01\x0a\x10\x01\x0e\x01\x01\x7f\x41\x00\x28\x02\x82\x80\x80\x80\x80\x80\x80\x80\x80\x40\x1a\x0b");

// binary-leb128.wast:770
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x05\x03\x01\x00\x01\x0a\x10\x01\x0e\x01\x01\x7f\x41\x00\x28\x82\x80\x80\x80\x10\x00\x1a\x0b");

// binary-leb128.wast:788
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x05\x03\x01\x00\x01\x0a\x10\x01\x0e\x01\x01\x7f\x41\x00\x28\x82\x80\x80\x80\x40\x00\x1a\x0b");

// binary-leb128.wast:807
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x05\x03\x01\x00\x01\x0a\x11\x01\x0f\x01\x01\x7f\x41\x00\x41\x03\x36\x82\x80\x80\x80\x10\x03\x0b");

// binary-leb128.wast:826
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x05\x03\x01\x00\x01\x0a\x11\x01\x0f\x01\x01\x7f\x41\x00\x41\x03\x36\x82\x80\x80\x80\x40\x03\x0b");

// binary-leb128.wast:845
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x05\x03\x01\x00\x01\x0a\x11\x01\x0f\x01\x01\x7f\x41\x00\x41\x03\x36\x02\x82\x80\x80\x80\x80\x80\x80\x80\x80\x10\x0b");

// binary-leb128.wast:865
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x05\x03\x01\x00\x01\x0a\x11\x01\x0f\x01\x01\x7f\x41\x00\x41\x03\x36\x02\x82\x80\x80\x80\x80\x80\x80\x80\x80\x40\x0b");

// binary-leb128.wast:887
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x06\x0a\x01\x7f\x00\x41\x80\x80\x80\x80\x70\x0b");

// binary-leb128.wast:897
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x06\x0a\x01\x7f\x00\x41\xff\xff\xff\xff\x0f\x0b");

// binary-leb128.wast:907
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x06\x0a\x01\x7f\x00\x41\x80\x80\x80\x80\x1f\x0b");

// binary-leb128.wast:917
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x06\x0a\x01\x7f\x00\x41\xff\xff\xff\xff\x4f\x0b");

// binary-leb128.wast:928
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x06\x0f\x01\x7e\x00\x42\x80\x80\x80\x80\x80\x80\x80\x80\x80\x7e\x0b");

// binary-leb128.wast:938
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x06\x0f\x01\x7e\x00\x42\xff\xff\xff\xff\xff\xff\xff\xff\xff\x01\x0b");

// binary-leb128.wast:948
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x06\x0f\x01\x7e\x00\x42\x80\x80\x80\x80\x80\x80\x80\x80\x80\x02\x0b");

// binary-leb128.wast:958
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x06\x0f\x01\x7e\x00\x42\xff\xff\xff\xff\xff\xff\xff\xff\xff\x41\x0b");

// binary-leb128.wast:969
let $26 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x1b\x01\x19\x00\x00\xfc\x80\x00\x00\xfc\x81\x80\x00\x00\xfc\x86\x80\x80\x00\x00\xfc\x87\x80\x80\x80\x00\x00\x0b");

// binary-leb128.wast:989
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x04\x01\x60\x00\x00\x03\x02\x01\x00\x0a\x0d\x01\x0b\x00\x00\xfc\x1\x80\x80\x80\x80\x00\x00\x0b");

// binary-leb128.wast:1007
let $27 = instance("\x00\x61\x73 \x6d\x01\x00\x00\x00\x1\x03\x01\x00\x00\x0b\x07\x01\x80\x00\x41\x00\x0b\x00");

// binary-leb128.wast:1015
let $28 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x05\x4\x01\x00\x00\x0b\x08\x01\x82\x00\x00\x41\x00\x0b\x00");

// binary-leb128.wast:1024
let $29 = instance("\x00\x61\x73\x6d\x01\x32768\x00\x00\x05\x03\x01\x00\x00\x0b\x09\x01\x82\x00\x80\x00\x41\x00\x0b\x00");

// binary-leb128.wast:1035
let $30 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x04\x04\x01\x70\x00\x00\x09\x07\x01\x80\x00\x41\x00\x0b\x00");

// binary-leb128.wast:1043
let $31 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x04\x04\x01\x70\x00\x00\x09\x09\x01\x02\x80\x00\x41\x00\x0b\x00\x00");

// binary-leb128.wast:1052
let $32 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x04\x04\x01\x70\x00\x00\x09\x09\x01\x82\x00\x00\x41\x00\x0b\x00\x00");

// binary-leb128.wast:1061
let $33 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x04\x04\x01\x70\x00\x00\x09\x0a\x01\x82\x00\x170141183460469231731687303715884105729\x00\x41\x00\x0b\x00\x00");

// binary-leb128.wast:1072
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x05\x01\xe0\x7f\x00\x00");
reinitializeRegistry();
})();
