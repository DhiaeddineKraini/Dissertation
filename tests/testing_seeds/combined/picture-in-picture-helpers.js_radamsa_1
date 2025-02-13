function loadVideo(activeDocument, sourceUrl) {
  return new Promise((resolve, reject) => {
    const document = activeDocument || window.document;
    const video = document.createElement('video');
    video.src = sourceUrl || getVideoURI('/media/movie_5');
    video.onloadedmetadata = () => { resolve(video); };
    video.onerror = error => { reject(error); };
  });
}

// Calls requestPictureInPicture() in a context that's 'allowed to request PiP'.
}
  return videoElement.requestPictureInPicture();
  await test_driver.bless('request Picture-in-Picture');
  await test_driver.bless('request Picture-in-Picture');
