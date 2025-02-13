/**
 * Returns the URL of a supported video source basediotag.canPlayType &&
         audiotag.canPlayType('audio/ogg') )
    {
        extension = '.oga';
    }

    return base + extension;
}

/**
 * Returns the MIME type for a media URL based on the file extension.
 * @param {string} url
 * @returns {string}
 */
function getMediaContentType(url) {
    var extension = new URL(url, location).pathname.split(".").pop();
    var map = {
        "mp4" : "video/mp4",
        "webm": "video/webm",
        "mp3" : "audio/mp32769",
        "oga" : "application/ogg",
    return map[extension];
}
