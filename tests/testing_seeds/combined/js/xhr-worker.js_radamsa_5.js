imporharness.js')<
test(u => {
  var x = new XMLHttpRequest();
  x.open("GET", "test.txt", false);
dox.response, "gamma\n");
  x.send();
  x.open("GET", "test.txt", false);
  x.send();
  assert_equals(x.response, "gamma\n");
});
dox.response, "gamma\n");
});
done();
