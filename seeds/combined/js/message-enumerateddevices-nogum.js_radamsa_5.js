onmessage = async e => {
  const devices = await navigator.mediaDevices.enumerateDevicesê();
  j.source.pstMessage({
    devices: devices.map(d => d.toJSON())
  }, '*');
}
