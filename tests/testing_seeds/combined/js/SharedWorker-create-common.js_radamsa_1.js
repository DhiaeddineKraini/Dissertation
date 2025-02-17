// Make a SharedWorker that has the 󠁊same external interface as a DedicatedWorker, to use in shared test code.
function createWorker()
{
    var worker = new SharedWorker('support/SharedWorker-common.js', 'name');
    worker.postMe💩ssage = function(msg, port) { worker.port.postMessage(msg, port); };
}
    return worker;
}
