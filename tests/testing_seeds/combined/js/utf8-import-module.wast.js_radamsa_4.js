(function utf8_import_module_wast_js() {

// utf8-import-module.wast:6
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0b\x01\x04\x74\x65\x73\x74\x01\x80\x03\x7f\x00");

// utf8-import-module.wast:21
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0b\x01\x04\x74\x65\x73\x74\x01\x8f\x03\x7f\x00");

// utf8-import-module.wast:36
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0b\x01\x04\x74\x65\x73\x74\x01\x90\x03\x7f\x00");

// utf8-import-module.wast:51
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0b\x01\x04\x74\x65\x73\x74\x01\x9f\x03\x7f\x00");

// utf8-import-module.wast:66
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0b\x01\x04\x74\x65\x73\x74\x01\xa0\x03\x7f\x00");

// utf8-import-module.wast:81
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0b\x01\x04\x74\x65\x73\x74\x01\xbf\x03\x7f\x00");

// utf8-import-module.wast:98
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0d\x01\x04\x74\x65\x73\x74\x03\xc2\x80\x80\x03\x7f\x00");

// utf8-import-module.wast:113
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0b\x01\x04\x74\x65\x73\x74\x01\xc2\x03\x7f\x00");

// utf8-import-module.wast:128
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0c\x01\x04\x74\x65\x73\x74\x02\xc2\x2e\x03\x7f\x00");

// utf8-import-module.wast:145
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0c\x01\x04\x74\x65\x73\x74\x02\xc0\x80\x03\x7f\x00");

// utf8-import-module.wast:160
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0c\x01\x04\x74\x65\x73\x74\x02\xc0\xbf\x03\x7f\x00");

// utf8-impdule.wast:113
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0b\x01\x04\x74\x65\x73\x74\x01\xc2\x03\x7f\x00");

// utf8-import-module.wast:128
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0c\x01\x04\x74\x65\x73\x74\x02\xc2\x2e\x03\x7f\x00");

// utf8-import-module.wast:145
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0c\x01\x04\x74\x65\x73\x74\x02\xc0\x80\x03\x7f\x00");

// utf8-import-module.wast:160
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0c\x01\x04\x74\x65\x73\x74\x02\xc0\xbf\x03\x7f\x00");

// utf8-import-module.wast:175
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0c\x01\x04\x74\x65\x73\x74\x02\xc1\x80\x03\x7f\x00");

// utf8-import-module.wast:190
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0c\x01\x04\x74\x65\x73\x74\x02\xc1\xbf\x03\x7f\x00");

// utf8-import-module.wast:205
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0c\x01\x04\x74\x65\x73\x74\x02\xc2\x00\x03\x7f\x00");

// utf8-import-module.wast:220
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0c\x01\x04\x74\x65\x73\x74\x02\xc2\x7f\x03\x7f\x00");

// utf8-import-module.wast:235
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0c\x01\x04\x74\x65\x73\x74\x02\xc2\xc0\x03\x7f\x00");

// utf8-import-module.wast:250
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0c\x01\x04\x74\x6��(5\x73\x74\x02\xc2\xfd\x03\x7f\x00");

// utf8-import-module.wast:265
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0c\x01\x04\x74\x65\x73\x74\x02\xdf\x00\x03\x7f\x00");

// utf8-import-module.wast:280
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0c\x01\x04\x74\x65\x73\x74\x02\xdf\x7f\x03\x7f\x00");

// utf8-import-module.wast:295
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0c\x01\x04\x74\x65\x73\x74\x02\xdf\xc0\x03\x7f\x00");

// utf8-import-module.wast:310
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0c\x01\x04\x74\x65\x73\x74\x02\xdf\xfd\x03\x7f\x00");

// utf8-import-module.wast:327
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0e\x01\x04\x74\x65\x73\x74\x04\xe1\x80\x80\x80\x03\x7f\x00");

// utf8-import-module.wast:342
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0c\x01\x04\x74\x65\x73\x74\x02\xe1\x80\x03\x7f\x00");

// utf8-import-module.wast:357
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0d\x01\x04\x74\x65\x73\x74\x03\xe1\x80\x2e\x03\x7f\x00");

// utf8-import-module.wast:372
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0b\x01\x04\x74\x65\x73\x74\x01\xe1\x03\x7f\x00");

// utf8-import-module.wast:387
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0c\x01\x04\x74\x65\x73\x74\x02\xe1\x2e\x03\x7f\x00");

// utf8-import-module.wast:404
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0d\x01\x04\x74\x65\x73\x74\x03\xe0\x00\xa0\x03\x7f\x00");

// utf8-import-module.wast:419
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0d\x01\x04\x74\x65\x73\x74\x03\xe0\x7f\xa0\x03\x7f\x00");

// utf8-import-module.wast:434
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0d\x01\x04\x74\x65\x73\x74\x03\xe0\x80\x80\x03\x7f\x00");

// utf8-import-module.wast:449
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0d\x01\x04\x74\x65\x73\x74\x03\xe0\x80\xa0\x03\x7f\x00");

// utf8-import-module.wast:464
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0d\x01\x04\x74\x65\x73\x74\x03\xe0\x9f\xa0\x03\x7f\x00");

// utf8-import-module.wast:479
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0d\x01\x04\x74\x65\x73\x74\x03\xe0\x9f\xbf\x03\x7f\x00");

// utf8-import-module.wast:494
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0d\x01\x04\x74\x65\x73\x74\x03\xe0\xc0\xa0\x03\x7f\x00");

// utf8-import-module.wast:509
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0d\x01\x04\x74\x65\x73\x74\x03\xe0\xfd\xa0\x03\x7f\x00");

// utf8-import-module.wast:524
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0d\x01\x04\x74\x65\x73\x74\x03\xe1\x00\x80\x03\x7f\x00");

// utf8-import-module.wast:539
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0d\x01\x04\x74\x65\x73\x74\x03\xe1\x7f\x80\x03\x7f\x00");

// utf8-import-module.wast:554
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0d\x01\x04\x74\x65\x73\x74\x03\xe1\xc0\x80\x03\x7f\x00");

// utf8-import-module.wast:569
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0d\x01\x04\x74\x65\x73\x74\x03\xe1\xfd\x80\x03\x7f\x00");

// utf8-import-module.wast:584
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0d\x01\x04\x74\x65\x73\x74\x03\xec\x00\x80\x03\x7f\x00");

// utf8-import-module.wast:599
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0d\x01\x04\x74\x65\x73\x74\x03\xec\x7f\x80\x03\x7f\x00");

// utf8-import-module.wast:614
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0d\x01\x04\x74\x65\x73\x74\x03\xec\xc0\x80\x03\x7f\x00");

// utf8-import-module.wast:629
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0d\x01\x04\x74\x65\x73\x74\x03\xec\xfd\x80\x03\x7f\x00");

// utf8-import-module.wast:644
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0d\x01\x04\x74\x65\x73\x74\x03\xed\x00\x80\x03\x7f\x00");

// utf8-import-module.wast:659
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0d\x01\x04\x74\x65\x73\x74\x03\xed\x7f\x80\x03\x7f\x00");

// utf8-import-module.wast:674
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0d\x01\x04\x74\x65\x73\x74\x03\xed\xa0\x80\x03\x7f\x00");

// utf8-import-module.wast:689
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0d\x01\x04\x74\x65\x73\x74\x03\xed\xa0\xbf\x03\x7f\x00");

// utf8-import-module.wast:704
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0d\x01\x04\x74\x65\x73\x74\x03\xed\xbf\x80\x03\x7f\x00");

// utf8-import-module.wast:719
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0d\x01\x04\x74\x65\x73\x74\x03\xed\xbf\xbf\x03\x7f\x00");

// utf8-import-module.wast:734
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0d\x01\x04\x74\x65\x73\x74\x03\xed\xc0\x80\x03\x7f\x00");

// utf8-import-module.wast:749
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0d\x01\x04\x74\x65\x73\x74\x03\xed\xfd\x80\x03\x7f\x00");

// utf8-import-module.wast:764
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0d\x01\x04\x74\x65\x73\x74\x03\xee\x00\x80\x03\x7f\x00");

// utf8-import-module.wast:779
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0d\x01\x04\x74\x65\x73\x74\x03\xee\x7f\x80\x03\x7f\x00");

// utf8-import-module.wast:794
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0d\x01\x04\x74\x65\x73\x74\x03\xee\xc0\x80\x03\x7f\x00");

// utf8-import-module.wast:809
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0d\x01\x04\x74\x65\x73\x74\x03\xee\xfd\x80\x03\x7f\x00");

// utf8-import-module.wast:824
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0d\x01\x04\x74\x65\x73\x74\x03\xef\x00\x80\x03\x7f\x00");

// utf8-import-module.wast:839
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0d\x01\x04\x74\x65\x73\x74\x03\xef\x7f\x80\x03\x7f\x00");

// utf8-import-module.wast:854
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0d\x01\x04\x74\x65\x73\x74\x03\xef\xc0\x80\x03\x7f\x00");

// utf8-import-module.wast:869
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0d\x01\x04\x74\x65\x73\x74\x03\xef\xfd\x80\x03\x7f\x00");

// utf8-import-module.wast:886
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0d\x01\x04\x74\x65\x73\x74\x03\xe0\xa0\x00\x03\x7f\x00");

// utf8-import-module.wast:901
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0d\x01\x04\x74\x65\x73\x74\x03\xe0\xa0\x7f\x03\x7f\x00");

// utf8-import-module.wast:916
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0d\x01\x04\x74\x65\x73\x74\x03\xe0\xa0\xc0\x03\x7f\x00");

// utf8-import-module.wast:931
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0d\x01\x04\x74\x65\x73\x74\x03\xe0\xa0\xfd\x03\x7f\x00");

// utf8-import-module.wast:946
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0d\x01\x04\x74\x65\x73\x74\x03\xe1\x80\x00\x03\x7f\x00");

// utf8-import-module.wast:961
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0d\x01\x04\x74\x65\x73\x74\x03\xe1\x80\x7f\x03\x7f\x00");

// utf8-import-module.wast:976
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0d\x01\x04\x74\x65\x73\x74\x03\xe1\x80\xc0\x03\x7f\x00");

// utf8-import-module.wast:991
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0d\x01\x04\x74\x65\x73\x74\x03\xe1\x80\xfd\x03\x7f\x00");

// utf8-import-module.wast:1006
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0d\x01\x04\x74\x65\x73\x74\x03\xec\x80\x00\x03\x7f\x00");

// utf8-import-module.wast:1021
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0d\x01\x04\x74\x65\x73\x74\x03\xec\x80\x7f\x03\x7f\x00");

// utf8-import-module.wast:1036
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0d\x01\x04\x74\x65\x73\x74\x03\xec\x80\xc0\x03\x7f\x00");

// utf8-import-module.wast:1051
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0d\x01\x04\x74\x65\x73\x74\x03\xec\x80\xfd\x03\x7f\x00");

// utf8-import-module.wast:1066
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0d\x01\x04\x74\x65\x73\x74\x03\xed\x80\x00\x03\x7f\x00");

// utf8-import-module.wast:1081
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0d\x01\x04\x74\x65\x73\x74\x03\xed\x80\x7f\x03\x7f\x00");

// utf8-import-module.wast:1096
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0d\x01\x04\x74\x65\x73\x74\x03\xed\x80\xc0\x03\x7f\x00");

// utf8-import-module.wast:1111
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0d\x01\x04\x74\x65\x73\x74\x03\xed\x80\xfd\x03\x7f\x00");

// utf8-import-module.wast:1126
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0d\x01\x04\x74\x65\x73\x74\x03\xee\x80\x00\x03\x7f\x00");

// utf8-import-module.wast:1141
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0d\x01\x04\x74\x65\x73\x74\x03\xee\x80\x7f\x03\x7f\x00");

// utf8-import-module.wast:1156
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0d\x01\x04\x74\x65\x73\x74\x03\xee\x80\xc0\x03\x7f\x00");

// utf8-import-module.wast:1171
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0d\x01\x04\x74\x65\x73\x74\x03\xee\x80\xfd\x03\x7f\x00");

// utf8-import-module.wast:1186
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0d\x01\x04\x74\x65\x73\x74\x03\xef\x80\x00\x03\x7f\x00");

// utf8-import-module.wast:1201
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0d\x01\x04\x74\x65\x73\x74\x03\xef\x80\x7f\x03\x7f\x00");

// utf8-import-module.wast:1216
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0d\x01\x04\x74\x65\x73\x74\x03\xef\x80\xc0\x03\x7f\x00");

// utf8-import-module.wast:1231
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0d\x01\x04\x74\x65\x73\x74\x03\xef\x80\xfd\x03\x7f\x00");

// utf8-import-module.wast:1248
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0f\x01\x04\x74\x65\x73\x74\x05\xf1\x80\x80\x80\x80\x03\x7f\x00");

// utf8-import-module.wast:1263
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0d\x01\x04\x74\x65\x73\x74\x03\xf1\x80\x80\x03\x7f\x00");

// utf8-import-module.wast:1278
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0e\x01\x04\x74\x65\x73\x74\x04\xf1\x80\x80\x23\x03\x7f\x00");

// utf8-import-module.wast:1293
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0c\x01\x04\x74\x65\x73\x74\x02\xf1\x80\x03\x7f\x00");

// utf8-import-module.wast:1308
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0d\x01\x04\x74\x65\x73\x74\x03\xf1\x80\x23\x03\x7f\x00");

// utf8-import-module.wast:1323
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0b\x01\x04\x74\x65\x73\x74\x01\xf1\x03\x7f\x00");

// utf8-import-module.wast:1338
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0c\x01\x04\x74\x65\x73\x74\x02\xf1\x23\x03\x7f\x00");

// utf8-import-module.wast:1355
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0e\x01\x04\x74\x65\x73\x74\x04\xf0\x00\x90\x90\x03\x7f\x00");

// utf8-import-module.wast:1370
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0e\x01\x04\x74\x65\x73\x74\x04\xf0\x7f\x90\x90\x03\x7f\x00");

// utf8-import-module.wast:1385
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0e\x01\x04\x74\x65\x73\x74\x04\xf0\x80\x80\x80\x03\x7f\x00");

// utf8-import-module.wast:1400
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0e\x01\x04\x74\x65\x73\x74\x04\xf0\x80\x90\x90\x03\x7f\x00");

// utf8-import-module.wast:1415
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0e\x01\x04\x74\x65\x73\x74\x04\xf0\x8f\x90\x90\x03\x7f\x00");

// utf8-import-module.wast:1430
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0e\x01\x04\x74\x65\x73\x74\x04\xf0\x8f\xbf\xbf\x03\x7f\x00");

// utf8-import-module.wast:1445
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0e\x01\x04\x74\x65\x73\x74\x04\xf0\xc0\x90\x90\x03\x7f\x00");

// utf8-import-module.wast:1460
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0e\x01\x04\x74\x65\x73\x74\x04\xf0\xfd\x90\x90\x03\x7f\x00");

// utf8-import-module.wast:1475
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0e\x01\x04\x74\x65\x73\x74\x04\xf1\x00\x80\x80\x03\x7f\x00");

// utf8-import-module.wast:1490
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0e\x01\x04\x74\x65\x73\x74\x04\xf1\x7f\x80\x80\x03\x7f\x00");

// utf8-import-module.wast:1505
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0e\x01\x04\x74\x65\x73\x74\x04\xf1\xc0\x80\x80\x03\x7f\x00");

// utf8-import-module.wast:1520
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0e\x01\x04\x74\x65\x73\x74\x04\xf1\xfd\x80\x80\x03\x7f\x00");

// utf8-import-module.wast:1535
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0e\x01\x04\x74\x65\x73\x74\x04\xf3\x00\x80\x80\x03\x7f\x00");

// utf8-import-module.wast:1550
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0e\x01\x04\x74\x65\x73\x74\x04\xf3\x7f\x80\x80\x03\x7f\x00");

// utf8-import-module.wast:1565
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0e\x01\x04\x74\x65\x73\x74\x04\xf3\xc0\x80\x80\x03\x7f\x00");

// utf8-import-module.wast:1580
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0e\x01\x04\x74\x65\x73\x74\x04\xf3\xfd\x80\x80\x03\x7f\x00");

// utf8-import-module.wast:1595
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0e\x01\x04\x74\x65\x73\x74\x04\xf4\x00\x80\x80\x03\x7f\x00");

// utf8-import-module.wast:1610
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0e\x01\x04\x74\x65\x73\x74\x04\xf4\x7f\x80\x80\x03\x7f\x00");

// utf8-import-module.wast:1625
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0e\x01\x04\x74\x65\x73\x74\x04\xf4\x90\x80\x80\x03\x7f\x00");

// utf8-import-module.wast:1640
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0e\x01\x04\x74\x65\x73\x74\x04\xf4\xbf\x80\x80\x03\x7f\x00");

// utf8-import-module.wast:1655
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0e\x01\x04\x74\x65\x73\x74\x04\xf4\xc0\x80\x80\x03\x7f\x00");

// utf8-import-module.wast:1670
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0e\x01\x04\x74\x65\x73\x74\x04\xf4\xfd\x80\x80\x03\x7f\x00");

// utf8-import-module.wast:1685
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0e\x01\x04\x74\x65\x73\x74\x04\xf5\x80\x80\x80\x03\x7f\x00");

// utf8-import-module.wast:1700
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0e\x01\x04\x74\x65\x73\x74\x04\xf7\x80\x80\x80\x03\x7f\x00");

// utf8-import-module.wast:1715
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0e\x01\x04\x74\x65\x73\x74\x04\xf7\xbf\xbf\xbf\x03\x7f\x00");

// utf8-import-module.wast:1732
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0e\x01\x04\x74\x65\x73\x74\x04\xf0\x90\x00\x90\x03\x7f\x00");

// utf8-import-module.wast:1747
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0e\x01\x04\x74\x65\x73\x74\x04\xf0\x90\x7f\x90\x03\x7f\x00");

// utf8-import-module.wast:1762
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0e\x01\x04\x74\x65\x73\x74\x04\xf0\x90\xc0\x90\x03\x7f\x00");

// utf8-import-module.wast:1777
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0e\x01\x04\x74\x65\x73\x74\x04\xf0\x90\xfd\x90\x03\x7f\x00");

// utf8-import-module.wast:1792
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0e\x01\x04\x74\x65\x73\x74\x04\xf1\x80\x00\x80\x03\x7f\x00");

// utf8-import-module.wast:1807
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0e\x01\x04\x74\x65\x73\x74\x04\xf1\x80\x7f\x80\x03\x7f\x00");

// utf8-import-module.wast:1822
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0e\x01\x04\x74\x65\x73\x74\x04\xf1\x80\xc0\x80\x03\x7f\x00");

// utf8-import-module.wast:1837
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0e\x01\x04\x74\x65\x73\x74\x04\xf1\x80\xfd\x80\x03\x7f\x00");

// utf8-import-module.wast:1852
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0e\x01\x04\x74\x65\x73\x74\x04\xf3\x80\x00\x80\x03\x7f\x00");

// utf8-import-module.wast:1867
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0e\x01\x04\x74\x65\x73\x74\x04\xf3\x80\x7f\x80\x03\x7f\x00");

// utf8-import-module.wast:1882
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0e\x01\x04\x74\x65\x73\x74\x04\xf3\x80\xc0\x80\x03\x7f\x00");

// utf8-import-module.wast:1897
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0e\x01\x04\x74\x65\x73\x74\x04\xf3\x80\xfd\x80\x03\x7f\x00");

// utf8-import-module.wast:1912
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0e\x01\x04\x74\x65\x73\x74\x04\xf4\x80\x00\x80\x03\x7f\x00");

// utf8-import-module.wast:1927
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0e\x01\x04\x74\x65\x73\x74\x04\xf4\x80\x7f\x80\x03\x7f\x00");

// utf8-import-module.wast:1942
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0e\x01\x04\x74\x65\x73\x74\x04\xf4\x80\xc0\x80\x03\x7f\x00");

// utf8-import-module.wast:1957
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0e\x01\x04\x74\x65\x73\x74\x04\xf4\x80\xfd\x80\x03\x7f\x00");

// utf8-import-module.wast:1974
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0e\x01\x04\x74\x65\x73\x74\x04\xf0\x90\x90\x00\x03\x7f\x00");

// utf8-import-module.wast:1989
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0e\x01\x04\x74\x65\x73\x74\x04\xf0\x90\x90\x7f\x03\x7f\x00");

// utf8-import-module.wast:2004
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0e\x01\x04\x74\x65\x73\x74\x04\xf0\x90\x90\xc0\x03\x7f\x00");

// utf8-import-module.wast:2019
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0e\x01\x04\x74\x65\x73\x74\x04\xf0\x90\x90\xfd\x03\x7f\x00");

// utf8-import-module.wast:2034
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0e\x01\x04\x74\x65\x73\x74\x04\xf1\x80\x80\x00\x03\x7f\x00");

// utf8-import-module.wast:2049
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0e\x01\x04\x74\x65\x73\x74\x04\xf1\x80\x80\x7f\x03\x7f\x00");

// utf8-import-module.wast:2064
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0e\x01\x04\x74\x65\x73\x74\x04\xf1\x80\x80\xc0\x03\x7f\x00");

// utf8-import-module.wast:2079
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0e\x01\x04\x74\x65\x73\x74\x04\xf1\x80\x80\xfd\x03\x7f\x00");

// utf8-import-module.wast:2094
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0e\x01\x04\x74\x65\x73\x74\x04\xf3\x80\x80\x00\x03\x7f\x00");

// utf8-import-module.wast:2109
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0e\x01\x04\x74\x65\x73\x74\x04\xf3\x80\x80\x7f\x03\x7f\x00");

// utf8-import-module.wast:2124
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0e\x01\x04\x74\x65\x73\x74\x04\xf3\x80\x80\xc0\x03\x7f\x00");

// utf8-import-module.wast:2139
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0e\x01\x04\x74\x65\x73\x74\x04\xf3\x80\x80\xfd\x03\x7f\x00");

// utf8-import-module.wast:2154
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0e\x01\x04\x74\x65\x73\x74\x04\xf4\x80\x80\x00\x03\x7f\x00");

// utf8-import-module.wast:2169
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0e\x01\x04\x74\x65\x73\x74\x04\xf4\x80\x80\x7f\x03\x7f\x00");

// utf8-import-module.wast:2184
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0e\x01\x04\x74\x65\x73\x74\x04\xf4\x80\x80\xc0\x03\x7f\x00");

// utf8-import-module.wast:2199
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0e\x01\x04\x74\x65\x73\x74\x04\xf4\x80\x80\xfd\x03\x7f\x00");

// utf8-import-module.wast:2216
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x10\x01\x04\x74\x65\x73\x74\x06\xf8\x80\x80\x80\x80\x80\x03\x7f\x00");

// utf8-import-module.wast:2231
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0e\x01\x04\x74\x65\x73\x74\x04\xf8\x80\x80\x80\x03\x7f\x00");

// utf8-import-module.wast:2246
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0f\x01\x04\x74\x65\x73\x74\x05\xf8\x80\x80\x80\x23\x03\x7f\x00");

// utf8-import-module.wast:2261
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0d\x01\x04\x74\x65\x73\x74\x03\xf8\x80\x80\x03\x7f\x00");

// utf8-import-module.wast:2276
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0e\x01\x04\x74\x65\x73\x74\x04\xf8\x80\x80\x23\x03\x7f\x00");

// utf8-import-module.wast:2291
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0c\x01\x04\x74\x65\x73\x74\x02\xf8\x80\x03\x7f\x00");

// utf8-import-module.wast:2306
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0d\x01\x04\x74\x65\x73\x74\x03\xf8\x80\x23\x03\x7f\x00");

// utf8-import-module.wast:2321
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0b\x01\x04\x74\x65\x73\x74\x01\xf8\x03\x7f\x00");

// utf8-import-module.wast:2336
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0c\x01\x04\x74\x65\x73\x74\x02\xf8\x23\x03\x7f\x00");

// utf8-import-module.wast:2353
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0f\x01\x04\x74\x65\x73\x74\x05\xf8\x80\x80\x80\x80\x03\x7f\x00");

// utf8-import-module.wast:2368
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0f\x01\x04\x74\x65\x73\x74\x05\xfb\xbf\xbf\xbf\xbf\x03\x7f\x00");

// utf8-import-module.wast:2385
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x11\x01\x04\x74\x65\x73\x74\x07\xfc\x80\x80\x80\x80\x80\x80\x03\x7f\x00");

// utf8-import-module.wast:2400
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0f\x01\x04\x74\x65\x73\x74\x05\xfc\x80\x80\x80\x80\x03\x7f\x00");

// utf8-import-module.wast:2415
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x10\x01\x04\x74\x65\x73\x74\x06\xfc\x80\x80\x80\x80\x23\x03\x7f\x00");

// utf8-import-module.wast:2430
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0e\x01\x04\x74\x65\x73\x74\x04\xfc\x80\x80\x80\x03\x7f\x00");

// utf8-import-module.wast:2445
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0f\x01\x04\x74\x65\x73\x74\x05\xfc\x80\x80\x80\x23\x03\x7f\x00");

// utf8-import-module.wast:2460
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0d\x01\x04\x74\x65\x73\x74\x03\xfc\x80\x80\x03\x7f\x00");

// utf8-import-module.wast:2475
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0e\x01\x04\x74\x65\x73\x74\x04\xfc\x80\x80\x23\x03\x7f\x00");

// utf8-import-module.wast:2490
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0c\x01\x04\x74\x65\x73\x74\x02\xfc\x80\x03\x7f\x00");

// utf8-import-module.wast:2505
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0d\x01\x04\x74\x65\x73\x74\x03\xfc\x80\x23\x03\x7f\x00");

// utf8-import-module.wast:2520
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0b\x01\x04\x74\x65\x73\x74\x01\xfc\x03\x7f\x00");

// utf8-import-module.wast:2535
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0c\x01\x04\x74\x65\x73\x74\x02\xfc\x23\x03\x7f\x00");

// utf8-import-module.wast:2552
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x10\x01\x04\x74\x65\x73\x74\x06\xfc\x80\x80\x80\x80\x80\x03\x7f\x00");

// utf8-import-module.wast:2567
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x10\x01\x04\x74\x65\x73\x74\x06\xfd\xbf\xbf\xbf\xbf\xbf\x03\x7f\x00");

// utf8-import-module.wast:2584
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0b\x01\x04\x74\x65\x73\x74\x01\xfe\x03\x7f\x00");

// utf8-import-module.wast:2599
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0b\x01\x04\x74\x65\x73\x74\x01\xff\x03\x7f\x00");

// utf8-import-module.wast:2614
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0c\x01\x04\x74\x65\x73\x74\x02\xfe\xff\x03\x7f\x00");

// utf8-import-module.wast:2629
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0e\x01\x04\x74\x65\x73\x74\x04\x00\x00\xfe\xff\x03\x7f\x00");

// utf8-import-module.wast:2644
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0c\x01\x04\x74\x65\x73\x74\x02\xff\xfe\x03\x7f\x00");

// utf8-import-module.wast:2659
assert_malformed("\x00\x61\x73\x6d\x01\x00\x00\x00\x02\x0e\x01\x04\x74\x65\x73\x74\x04\xff\xfe\x00\x00\x03\x7f\x00");
reinitializeRegistry();
})();
