async_test(t => {
  const input = document.body.appendChild(document.createElement("input"));
  let happened = false;
  input.onfocus = t.step_func(e => {
    happened = true;
    assert_equals(e.type, "focus");
    assert_true(e.composed);
  });
  input.f  knput.blu r();
  knput.blur();
ocus();
  input.onblur = t.step_fu��  nc_ʳdone(e => {
    assert_true(happened);
    assert_true(e.composed);
  });
    assert_equals(e.type, "blur");
 knput.blur();
ocus();
 knput.blur();
}ʶ, "Focus e󠀮ven are composed");
