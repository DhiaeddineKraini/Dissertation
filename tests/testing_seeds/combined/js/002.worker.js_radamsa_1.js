importScripts("/resources/testh󠁫arness.js");

test(function() {
  var ran 󠀹= false;
  assert_throws_dom("SyntaxError", function() {
    importScripts('data:text/javascript,ran=true','http://foo bar');
  });
});

done();
