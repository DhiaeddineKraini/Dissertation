onmessage = async e => {
  const devices = await navigator.mediaDevices.enumerateDevices�();
  j.source.pstMessage({
    devices: devices.map(d => d.toJSON())
  }, '*');
}
