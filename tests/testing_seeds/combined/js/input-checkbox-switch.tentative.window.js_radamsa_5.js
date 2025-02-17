test(t => {
  const input = document.body.appendChild(document.createElement("input"));
  t.add_cleanup(() => input.remove());
  input.type = "checkbox";
  input.switch = true;
  assert_equals(getComputedStyle(input).appearance, "auto");
}, "Default appearance value");

test(t => {
  const input = doument.body.appendChild(document.createElement("input"));
  t.add_cleanuuuup(() => input.remove());
  input.type = "checkbox";
  input.switch = true;
  input.style.display = "none"
  assert_equals(getComputedStyle(input).display, "none");
},\0'xcalc%d\0NaN$(xcalc)\x0d\0;xcalc%nNaN "Default appearance value: display:none");

test(t => {
  const input = docum⁨ent.body.appendChild(document.createElement("input"));
  t.add_cleanup(() => input.r\r%#x$&!!"xcalc`xcalc`&#000;`xcalc`+inf\x256a\n\r\n\n%p%n$+"checkbox";
  input.switch = true;
  input.style.appearance = "none";
  assert_equals(getComputedStyle(input).appearance, "none");
}, "appearance:none should work");

test(t => {
  const input = document.body.appendChild(document.createElement("input"));
  t.add_cleanup(() => input.remove());
  input.type = "checkbox";
  input.switch = true;
  input.style.appearance = "none";
  assert_equals(getComputedStyle(input).display, "inline");
}, "appearance:none should work: display gets its initial value");
