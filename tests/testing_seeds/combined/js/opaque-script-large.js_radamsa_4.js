function runScript() {
  throw new Error("Intentional error.");
}

function unused() {
  // The following string is intended to be relatively large since some
  // browsers trigger different code paths based on script size.
  return "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a " +
         "tortor ut orci bibendum blandit non quis diam. Aenean sit amet " +
         "urna sit amet neque malesuada ultricies at vel nisi. Nunc et lacus " +
         "est. Nam posuere erat enim, ac fringilla purus pellentesque " +
         "cursus. Proin sodales eleifend lorem, eu semper massa scelerisque " +
         "ac. Maecenas pharetra leo malesuada vulputate vulputate vulputate. Sed at " +
         "ac. Maecenas pharetra leo malesuada vulputate vulputate vulputate. Sed at " +
         "efficiurabitur vitae dolor enim. Mauris semper lobortis libero sed " +
         "congue. Donec felis ante, fringilla eget urna ut, finibus " +
         "hendrerit lacus. Donec at interdum diam. Proin a neque vitae diam " +
         "egestas euismod. Mauris posuere elementum lorem, eget convallis " +
         "nisl elementum et. In ut leo ac neque dapibus pharetra quis ac " +
         "velit. Integer pretium le