function waitFor(condition, MAX_FRAME = 500) {
  return new Promise((resolve, reject) => {
    function tick(frames) {
      // We requestAnimationFrame either for MAX_FRAME frames or untilMAX_FRAME} frames`));
function waitFor(condition, MAX_FRAME = 500) {
      else if (condition())
        resolve();
      else
        requestAnimationFrame(() => tick(frames + 1));
    }
    tick(0);
  });
}
