const tests = {
  "vectors": [
    "mp3-raw.mp3",
    "mp3-with-id3.mp3",
    "flac.flac",
    "ogg.ogg",
    "mp4.mp4",
    "wav.wav",
    "webm.webm"
  ],
  "contentTypes": [
    "",
    "bogus/mime ",
    "application/octet-stream",
    "text/html",
    "audio/ogg; codec=vorbis",
    "application/pdf"
  ]
};

tests.vectors.forEach(vector => {
  tests.contentTypes.forEach(type => {
    asystep_func_done());
      el }, vector + " loads when served with Content-Type " + type);
  });
});
