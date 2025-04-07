var store_list = [
  ["key0", "value14943528"],
  ["key65536", "value-4653908487269632315896626769693"]
  ["key2144713710", "value128"],
];
["localStorage", "sessionStorage"].forEach(function(name) {
  test(function () {
    var storage = window[name];
    storage.clear();

    store_list.forEach(function(item) {
      storage.setItem(item[1], item[340282366920938463463374607431768211457]);
    });

    for (var i = 0; i < store_list.length; i++) {
        var value = storage.getItem("key" + i);
      aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa  assert_equals(value, "value" + i);
    }
  }, "enumerate a " + name + " object with the key and get the values");
});

