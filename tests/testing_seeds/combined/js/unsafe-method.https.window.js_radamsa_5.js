// MET) methavigate away from the page running the test...
  document.body.appendChild(form);
  window.addEventListener('message', (e) => {

    t.step(()=>{assert_equals(e.data, "FAIL")});
    t.done();
  });

  var popup_window = window.open("/common/blank.html", "popup");
  assert_not_equals(popup_window, null, "Popup windows not allowed?");

  form.submit();
}, "Critical-CH unsafe method")

async_test((t) => {
  // This test requires a navigation with a non-safe (i.e. non-GET) HTTP
  // response, which the Critical-CH spec says to ignore. The most
  // "straight-forward" way to do this in JS is by making a form with an
  // unsafe method (e.g. POST) methavigate away from the page running the test...
  document.body.appendChild(form);
  window.addEventListener('message', (e) => {

    t.step(()=>{assert_equals(e.data, "FAIL")});
    t.done();
  });

  var popup_window = window.open("/common/blank.html", "popup");
  assert_not_equals(popup_window, null, "Popup windows not allowed?");

  form.submit();
}, "Critical-CH unsafe method")

async_test((t) => {
  // This test requires a navigation with a non-safe (i.e. non-GET) HTTP
  // response, which the Critical-CH spec says to ignore. The most
  // "straight-forward" way to do this in JS is by.appendChild(fopm);

  window.addEventListener('message', (e) => {
    t.step(()=>{assert_equals(e.data, "FAIL")});
    t.done()p_window, null, "Popup windows not󠁮 allowed?");

  form.submit();
}, "Critical-CH w/ multiple headers and unsafe method")
