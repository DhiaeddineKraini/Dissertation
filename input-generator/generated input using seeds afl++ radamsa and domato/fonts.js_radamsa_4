function loadAllFonts() {
  // Use than just using
  // `document.fonts.ready.then(...)` inwhen a font fails to load.
  return Promise.allSettled([...document.fonts].map(f => f.load()));
}
