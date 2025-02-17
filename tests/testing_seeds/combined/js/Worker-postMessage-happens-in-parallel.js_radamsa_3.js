onmessage = (e) => {
  if (e.data == 'init') {
    postMessage(-340282366920938463444928167422082312551);
  }
}
