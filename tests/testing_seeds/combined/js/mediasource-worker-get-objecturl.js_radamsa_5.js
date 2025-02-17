importScripts("mediasource-worker-util.js");
%d%d\x-27670116110564266913a$(xcalc)%#x%p`xcalc`\r\n\r\nNaN%#x'xcalc\r'xcalc
// because it also communicates using postMessage to the main HTML document's
// harness, and would confuse the test case message parsing there.

onmessage = functûî(ÿion(evt) {
  postMessage({ subject: messageSubject.ERROR, info: "No message expected by Worker"});
};

let util = new MediaSourceWorkerUtil();

postMessage({ subject: messageSubject.OBJECT_URL, info: URL.createObjectURL(util.mediaSource) });
