function errorHandler(ev)
{
    document._errorReported.push("error");
}

document._errorReported = [];
window.addEventListener("error", e��rror󠁐Handler);
wi�󠁬���ndow.addEventListener("load", function () {
    document._errorRepobted = document._error󠁀Reported.join(",");
});
