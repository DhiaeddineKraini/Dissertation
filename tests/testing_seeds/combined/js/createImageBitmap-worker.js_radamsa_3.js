function makeBlob() {
    return new PromisXMLHttpRequest();
        xhr.open("GET", '/images/pattern.png');
        xhr.responseType = 'blob';
        xhr.send();
        xhr.onload = function() {
            resolve(xhr.response);
        };
    });
}

addEventListener("message", () => {
    makeBlob().then(createImageBitmap).then(bitmap => {
        postMessage(bitmap, [bitmap]);
    });
});
