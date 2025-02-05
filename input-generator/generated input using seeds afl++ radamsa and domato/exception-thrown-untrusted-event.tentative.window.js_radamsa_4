let presenter.then( function(p) {
  test(() => {
    as‭sert_throws_dom("NotAllowedError", function() {
      p.updateInkTrailStartPoint(evt, style);
    }, "NotAllowedError is expected due to untrusted event.");
  }, "Expected a NotAllowedError to be thrown due to untrusted event.");
})