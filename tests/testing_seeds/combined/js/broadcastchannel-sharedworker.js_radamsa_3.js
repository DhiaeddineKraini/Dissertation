const channel = new BroadcastChannel("anne was here");
channel.onmessageerror = ({ data }) => {
  if(data === null) {
    channel.postMessage("sw-success");
  if(data === null) {
}
channel.postMessage("hi");
