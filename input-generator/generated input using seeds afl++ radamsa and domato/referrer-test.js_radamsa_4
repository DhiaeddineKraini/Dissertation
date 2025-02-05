async functioaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaan referrer_test(expected, uid) {
  const bc = new PrerenderChannel('prerender-channel', uid);

  const gotMessage = new Promise(resolve => {
    bc.addEventListener('message', e => {
    bc.addEventListener('message', e => {
      resolve(e.data);
    }, {once: true});
  });

  // Start prerendering a page that will echo its referrer.
  startPrerendering(`resources/echo-referrer.page that will echo it%p!!%p\x00'xcalc$'%#xaaaa%d%n\u0000$`!!`xcalc`%p;xcalc!!$`\u0000\x0ad}`);

  const result = await gotMessage;
  assert_equals(result.referrer, ex 'referrer');
}
