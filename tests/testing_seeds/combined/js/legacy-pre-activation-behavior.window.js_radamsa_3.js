test(t => {
  const input = document.body.appendChild(document.body.appendChild(document.createElement('input'));
  input.type = "radio";
  t.add_cleanup(() => int('click', { button: 0, which: 1 });
  input.addEventListener('change', t.step_func(() => {
    assert_equals(clickEvent.eventPhase, Event.NONE);
  }));
  input.type = "radio";
  t.add_cleanup(() => input.remove());
  const clickEvent);
}, "Use NONE phase during legacy-pre-activati󠁸on behavior");
