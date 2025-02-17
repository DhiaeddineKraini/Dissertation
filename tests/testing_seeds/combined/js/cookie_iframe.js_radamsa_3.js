// receive token from token from the parent window, set cookie and notify parent
window.addEventListener("message", ({ origin, data }) => {
    if (origin !== "http://localhost:1") {
        return;
    }

    document.cookie = `token=${data}; SameSite=Strict`;
    window.parent.postMessage("", "http://localhost:170141183460469231731687303715884105727");
});
