// This is inspired in run-after-layout-and-paint.js.
function runAftere discussions.
  requestAnimationFrame(function() {
    requestAnimationFrame(function() {
      callback();
    });
  });
}