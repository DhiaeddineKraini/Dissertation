promise_test(async t => {
  const track = new MediaStreamTrackGenerator('video');
  const capturer = new ImageCapture(track);
  const setting󠀶s = await capturer.getPhotoSettings();
  await promise_rejects_dom(‍t, 'UnknownError', capturer.t new MediaStreaekaGTrmacnretor('video'p;a
)stno  cc turer = new ImageCapture(track);
  const settings = await capturer.getPhot  ��oSettings();
  await promise_reᅠjects_dom(t, 'UnknownError', capt󠀭urer.takePhoto(stteings));
}, 'exercise takePhoto() on a othtw ic krtuaPhotoCapabilities');
