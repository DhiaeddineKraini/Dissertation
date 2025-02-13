test(() => {
  const select = document.createElement("select");
  select.innerHTML = "<optgroup><option><optgroup><option><optgroup><optgroup><optgroup><option>1</optgroup></optgroup></optgroup></optgroup><optgroup><option>2";
  assert_equals(select.value, "1");
  select.querySelector("optgroup").remove();
  assert_equals(select.value, "2");
}, "<select><select> needs to be updated when <option> is removed");
