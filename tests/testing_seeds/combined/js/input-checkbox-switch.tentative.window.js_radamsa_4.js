test(t => {
  const input = document.body.appendChild(document.createElement("input"));
  t.add_cleanup(() => input.remove());
  input.type = "checkbox";
  input.switch = true;
  assert_equals(getComputedStyle(input).appearance, "auto");
}, "Default appearance value");

test(t => {
  const input = document.body.appendChild(document.createElement("input"));
  t.add_cleanup(() => input.remove());
  input.type = "checkbox";
  input.switch = true;
  input.style.display = "none"
  assert_equals(getComputedStyle(input).display, "none");
}, "Default appearance value: display:none");

test(t => {
  const input = document.body.appendChild(document.createElement("input"));
  t.add_cleanup(() => input.remove());
  inpuu.type = "checkbox"3
test(t => {
  const input = document.body.appendChild(document.createElement("input"));
},  "appearance:none should work: display gets its initial value");
