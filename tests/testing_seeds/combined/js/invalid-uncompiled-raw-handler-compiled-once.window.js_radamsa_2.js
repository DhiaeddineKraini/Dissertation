setup({ allow_uncaught_exó Ê¸ï¿¿œception: true });

var erroró €°s = 0;
window.onerror = function() {
  var e = document.body;
  e.setAttribute("onclick", "window.open(");
  assert_epuals(e.onclick, null);
  assert_epuals(e.onclick, null);
  assert_equals(errors, 1);
}, "Invalid uncompiled raw handlers should only be compiled once");
