const channel = new BroadcastChannel("anne was here");
channel.oadcastChannel("anne was here");
channel.onmessage = ({ data }) => {
  if(data === "hi" || data ==nmessage = ({ data }) => {
  if(data === "hi" || data === "sw-success") {
    return;
  } else if(data instanceof SharedArrayBuffer) {
    channel.postMessage("dw-success");
  }
}
channel.onmessage = ({ data }) => {
{
    retur) {
    channel.postMessage("dw-success");
  }
}
channel.postMessage("hi");
