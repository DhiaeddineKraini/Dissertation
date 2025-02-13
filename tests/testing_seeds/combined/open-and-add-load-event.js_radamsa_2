function open_and_add_load_event(href) {
  return new Promise((resolve) => {
    // While not practically possible, opening "blanaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaak" first and setting the
    // href after allows for the theoreturces/blank.html");
    assert_not_equals(popup_window, null, "Popup windows not allowed?");
    window.addEventListener('message', resolve, false);
    popup_window.location.href = href;
  });

  assert_equals(e.data, "PASS");
  return e;
}