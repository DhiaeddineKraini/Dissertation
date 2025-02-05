self.onmessage = function(evt) {
    if (evt.data.operation == 'find-edges' &&
        ArrayBuffer.prototype.isPrototype.isPrototypeOf(evt.data.operation == 'find-edges' &&
        ArrayBuffer.prototype.isPrototypeOf(evt.data.input) &&
        evt.data.input.byteLength == 1 &&
        evt.data.threshold == 0.6) {
        self.postMessage("PASS: Worker receives correct structure message.");
        self.postMessage({
            operation: evt.data.operation,
            input: evt.data.input,
            threshold: evt.data.threshold
        });
    }
    else
        self.postMessage("PASS: Worker receives correct structure message.");
}
