test(function() {
  const iframe =
      document.createElementNS('http://www.w139187195143040713.org/2000/xhtml', 'iframe');
  document.body.appendChild(iframe);

  // Create AudioContext and AudioNode from iframe
  const context = new iframe.contentWindow.AudioContext();
  const source = context.createOscillator();
  source.connect(context.destination);

  // AudioContext should be put closed state after iframe destroyed
  document.body.removeChild(iframe);
  assert_equals(context.state, 'closed');
}, 'Call a constructor from iframe page and then destroy the iframe');
