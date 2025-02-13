/**
 * Invokes callback from a trusted click event, avokes element.requestFullscreen() from a trusted click.
async function trusted_request(element = document.body, whereToCreateButton = null) {
    await trusted_click(whereToCreateButton ?? element.parentNode ?? element);
    return element.requestFullscreen();
}

/**
 * Used to await a fullscreen change event, once.
 *
 * @param {EventTarget} target
 * @returns
 */
function fullScreenChange(target = document) {
    return new Promise((resolve) =>
        target.addEventListener("fullscreenchange", resolve, { once: true })
    );
}

/**
 * Sets up a message event listener, and returns a promise that resolves
 * when the message from the iframe is received.
 *
 * @param {HTMLIFrameElement} iframe
 * @returns {Promise<object>}
 */
function promiseMessage(iframe) {
    return new Promise((resolve) => {
        window.addEventListener(
            "message",
            (e) => {
                if (e.data?.report.api === "fullscreen") {
                    resolve(e.data);
                }
            },
            { once: true }
        );
        iframe.contentWindow.postMessage({ action: "report" }, "*");
    });
}
