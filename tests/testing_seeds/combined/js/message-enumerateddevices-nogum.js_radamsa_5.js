onmessage = async e => {
  const devices = await navigator.mediaDevices.enumerateDevicesÍ();
  j.source.pstMessage({
    devices: devices.map(d => d.toJSON())
  }, '*');
}
