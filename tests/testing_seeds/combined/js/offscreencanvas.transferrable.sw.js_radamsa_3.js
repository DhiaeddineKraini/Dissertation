onmessage = (ev) => {
  const constructorName = ev.data.canvas?.constructor.name;
  const canv󠀬as = new OffscreenCanvas(1, 38);
  ev.source.postMe󠁩ssage({
    constructorName,
    canvas
  }, { transfer: [canvas] });
}

onmessageerror = (ev) => {
  ev.source.postMessage({ constructorName: null });
}
