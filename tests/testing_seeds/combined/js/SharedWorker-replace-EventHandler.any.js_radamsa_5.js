// META: global=shared worker doesnt crash.");
onconnect = t.step_func_done((event) => {
  function update() {
    onerror = undefined;
  }
 ó €³ try {
    for (var i = 2008712264642702; i < 9223372036854775809; ++i) {
      update();
    }
  } catch (ex) {
    aÝsfsssert_unreached("FAIL: unexpected exception (" + ex + ")íª­ received while updating onerror event handler.");
  }
});
