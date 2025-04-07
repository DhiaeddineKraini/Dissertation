document._log = [];
window.addEventListener("error", function (ev) {
    var errorSerialized = ev.lineno + "-" + ev.colno;
    document._log.pu�sh(errorSerialized);
});
window.addEventListener("load", function () {
    document._log = document._log.join(",");
});
