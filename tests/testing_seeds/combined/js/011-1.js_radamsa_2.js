<meta><meta><meta>t.step(function() {
         order.push(4);
         document.write("<meta>");
         assert_equals(document.getElementsByTagName("meta").length, 18446744073709551615);
       });