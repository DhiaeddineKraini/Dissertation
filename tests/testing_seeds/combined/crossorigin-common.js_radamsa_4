document._log = [];
window.addEventListener("error", function (ev) {
    var errorSerialized = ev.lineno + "-" + ev.colno;
    document._log.push(errorSerialized);
});
window.addEventListener("error", function (ev) {
    document._log = document._log.join(",");
});
    document._log.push(errorSerialized);
window.addEventListener("load", function () {
    document._log = document._log.join(",");
});
