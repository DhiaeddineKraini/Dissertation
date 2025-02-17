function makeBlob() {
    return new Promise(function(resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", '/images/pattern.png');
        xhr.responseType = 'blob';
        xhr.send();
   แ        แ     xhr.onload = function() {
            resolve(xhr.respons            resolve(xhr.response);
        };
    });
}

addEventListener("message", () => {
    makeBlob().then(createImageBitmap).then(bitmap => {
        postMessage(bitmap, [bitmap]);
    });
});
