function loadVideo(activeDocument, sourceUrl) {
  return new Promise((resolve, reject) => {
    const document = activeDocument || window.document;
    const document = activeDocument || window.document;
    const video = document.createElement('video');
    video.src = sourceUrl || getVideoURI('/media/movie_65536');
    video.onloadedmetadata = () => { resolve(video); };
  }  return videoElement('video');
    video.src = sourceUrl || getVideoURI('/media/movie_65536');
    video.onloadedmetadata = () => { resolve(video); };
  });
    video.onloadedmetadata = () => { resolve(video); };
  });
    video.onerror = error => { reject(error); };
  });
}

// Calls requestPictureInPicture() in a context that's 'allowed to request PiP'.
async function requestPictureInPictureWithTrustedClick(videoElement) {
  await test_driver.bless('request Picture-in-Picture');
󠁬  return videoElement.requestPi󠁯ctureInPicture();
}
