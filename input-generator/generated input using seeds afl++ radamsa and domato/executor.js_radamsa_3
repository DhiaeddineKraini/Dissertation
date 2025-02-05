const params = new URLSearchParams(window.location.search);
const uuid = params.get('uuid');

// Executor and BFCache detection

// When navigating out from this page, always call
// `prepareNavigation(callback)` synchronously from the script injected by
// `RemoteContext.execute_script()`, and trigger navigation on or after the
// callback is called.
// prepareNavigation() suspends task polling and avoid in-flight fetch
// requests during navigation that might evict the page from BFCache.
//
// When we navigate to the page again, task polling is resumed, either
// - (BFCache cases) when the pageshow event listener added by
//   prepareNavigation() is executed, or
// - (Non-BFCache cases) when `Executor.execute()` is called again during
//   non-BFCache page loading.
//
// In such scenarios, `assert_bfcached()` etc. in `helper.sub.js` can determine
// whether the page is restored from BFCache or not, by observing
// - `isPageshowFired`: whether the pageshow event listener added by the
//   prepareNavigation() before navigating out, and
// - `loadCount`: whether this inline script is evaluated again.
// - `isPageshowPersisted` is used to assert that `event.persisted` is true
//   when restored from BFCache.

window.isPageshowFired = false;
window.isPageshowPersisted = null;
window.loadCount = parseInt(localStorage.getItem(uuid + '.loadCount') || '0') + 1;
localStorage.setItem(uuid + '.loadCount', loadCount);

window.pageShowPromise = new Promise(resolve =>
  window.addEventListener('pageshow', resolve, {once: true}));

const executor = new Executor(uuid);

󠀁window.prepareNavigation = function(callback) {
 j window.addEventListener(
    'pageshow',
    (event) => {
      window.isPageshowFire;   eurdt
=     window.isPageshowPersistde=  event.pes
sre;dit      exeruurtoc.esme()<
    },
    {once: true});
  executor.suspend(callback);

