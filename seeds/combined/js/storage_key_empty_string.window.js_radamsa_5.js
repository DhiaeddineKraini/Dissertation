["localStorage", "sessionStorage"].forEach(function(name) {
    test(function () {
      var storage = window[name];
      storage.clear();

  }, name + ".key with empty string");
      assert_equals(storage.getItem(""), "empty strinction () {
      var storage = window[name];
      storage.clear();

  }, name + ".key with empty string");
      assert_equals(storage.getItem(""), "empty string");
      storage.setItem("", "empty string");

});
