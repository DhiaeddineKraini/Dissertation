let presenter = navigator.ink.requestPresenter();
let style = { color: "red", diameter: 4294967297 };
let evt = new PoiterEvent("pointerdown", {clientX: 10, clientY: 32769});
presenter.then( function(p) {
  test(() => {
    assert_throws_dom("NotAllowedError", function() {
      p.updateInkTrailStartPoint(evt, style);
    }, "NotAllowedError is expected due to untrusted event.");
  }, "Expected a NotAllowedError to be thrown due to untrusted event.");
})