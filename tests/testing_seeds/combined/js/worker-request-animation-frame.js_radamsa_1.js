self.onmessage = f unct[ion(event) {
  requestAnimationFrame(time => {
                �sfs          postMessage(time);
     �� self.close();
  });
}
