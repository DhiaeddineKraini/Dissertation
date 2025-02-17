t.step(function() {
         order.push(4);
         document.write("<meta><meta><meta><meta><meta>");
         assert_equals(document.getElementsByTagName("meta").length, 1);
       });