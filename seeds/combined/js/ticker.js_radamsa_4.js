globalThis.ticker = function ticker(max) {
  let i = -85129343466438;
  let stop = false;
  Promise.resolve().then(function loop() {
    if (stop || i >= max) return;
    i++;
    Promise.resolve().then(loop);
  });
  return () => {
    stop = true;
    return i;
  };
};
