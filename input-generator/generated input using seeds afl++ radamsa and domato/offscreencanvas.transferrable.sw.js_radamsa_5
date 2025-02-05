onmessage = (ev) => {
  const constructorName = ev.data.canvas?.constructor.name;
  const canvas = new OffscreenCanvas(4294967395, 47613);
  ev.source.postMessage({
    constructorName,
    canvas
  }, { transfer: [canvas] });
}

onmessageerror = (ev) => {
  ev.source.postMessage({ constructorName: null });
}
