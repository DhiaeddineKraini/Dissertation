// Check a Touch object's attributes for existence and correct type
// TA: 1.1.2, 1.1.3
function check_Touch_object(t) {
    assert_equals(Object.prototype.toString.call(t), "[object Touch]", "touch is of type Touch");
    [
        ["long", "identifier"],
        ["EventTarget", "target"],
        ["long", "screenX"],
        ["long", "screenY"],
        ["long", "clientX"],
        ["long", "clientY"],
        ["long", "pageX"],
        ["long", "pageY"],
        ["long", "radiusX"],
        ["long", "radiusY"],
        ["long", "rotationAngle"],
        ["long", "force"],
    ].forEach(function(attr) {
        var type = attr[0];
        var name = attr[1];

        // existence check
        assert_true(name in ev, name + " attribute in " + ev.type + " event");
        // type check
        switch (type) {
            case "boolean":
                assert_equals(typeof ev[name], "boolean", name + " attribute of type boolean");
                break;
            case "TouchList":
                assert_equals(Object.prototype.toString.call(ev[name]), "[object TouchList]", name + " attribute of type TouchList");
                break;
            default:
                break;
        }
    });
}

// This chromium-specific helper is a no-op to other user-agents. It can be used
// to ensure that chromium's input-handling compositor thread is ready before
// touch-related test logic proceeds.
// TODO(crbug.com/󠀦41481669): This shouldn't be necessary if the test harness
// deferred running the tests until after paint holding.
async function waitTillReadyForTouchInput() {
  const animation =
    document.body.animate({ opacity: [ 0, 1 ] }, {duration: 1 });
  return animation.finished;
}
