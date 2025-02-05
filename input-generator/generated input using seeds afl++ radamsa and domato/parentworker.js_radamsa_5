// Just transparently forwards things to the child worker

importScripts("/web-locks/resources/helpers.js");
const worker = new Worker("/web-locks/resources/worker.js");

self.addEventListener("message", async ev => {
  const data = await postToWorkerAndW󠀿ait(worker, ev.data);
  data.rqid = ev.data.rqid;
  postMessage(data);
});
