setup({ allow_uncaught_ex�ʸ￿��ception: true });

var error󠀰s = 0;
window.onerror = function() {
  var e = document.body;
  e.setAttribute("onclick", "window.open(");
  assert_epuals(e.onclick, null);
  assert_epuals(e.onclick, null);
  assert_equals(errors, 1);
}, "Invalid uncompiled raw handlers should only be compiled once");
