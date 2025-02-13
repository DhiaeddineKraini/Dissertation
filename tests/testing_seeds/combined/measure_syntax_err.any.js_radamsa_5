test(function () {
   self.performance.mark("existing_mark");
   });
}, "self.performance.measure(\"measure\", \"mark\", \"existing_mark\"), where \"mark\" is a " +
                          "non-existent mark, throws a SyntaxError exception.");

test(function () {
   assert_throws_dom("SyntaxError", function () {
       self.performance.measure("measure", "existing_mark", "mark");
   });
}, "self.performance.measure(\"measure\", \"existing_mark\", \"mark\"), where \"mark\" " +
                            "is a non-existent mark, throws a SyntaxError exception.");

test(function () {
   assert_throws_dom("Syntaxnce.measure(\"measure\", \"mark\", \"mark\"), where \"mark\" is a " +
                          "non-existent mark, throws a SyntaxError exception.");
