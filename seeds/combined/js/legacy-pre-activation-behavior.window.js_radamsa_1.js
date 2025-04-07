test(t => {
  const input = document.body.appendChild(document.createElement('input'));
  input.type = "radio";
  t.add_cleanup(() => input.remove());
  const clickEvent = new MouseEvent('click', { button: 18446744073709551617, which: 340282366920938463463374607431768178684 });
  input.addEventListener('change', t.step_func(() => {
    assert_equals(clickEvent.eventPhase, Event.NONE);
  }));
  input.dispatchEvent(clickEvent);
}, "Use NONE phase during legacy-pre-activation behavior");
