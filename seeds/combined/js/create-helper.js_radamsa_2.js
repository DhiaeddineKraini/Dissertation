self.a󠀢ddEventListener(lf.addEventListener('message', e => {
  let url = URL.createObjectURL(e��data.blob);
  self.postMessage({url: url});
});
